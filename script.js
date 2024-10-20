// Gestion du menu hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fermer le menu hamburger lorsqu'un lien est cliqué
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Gestion du modal de paiement
const paymentModal = document.getElementById('payment-modal');
const closeButton = document.querySelector('.close-button');

document.getElementById('buy-now').addEventListener('click', () => {
    openModal();
});

document.getElementById('subscribe-monthly').addEventListener('click', () => {
    openModal('monthly');
});

document.getElementById('subscribe-yearly').addEventListener('click', () => {
    openModal('yearly');
});

closeButton.addEventListener('click', () => {
    closeModal();
});

window.addEventListener('click', (e) => {
    if (e.target == paymentModal) {
        closeModal();
    }
});

function openModal(plan = 'one-time') {
    paymentModal.style.display = 'block';
    // Vous pouvez stocker le type de plan sélectionné pour l'utiliser lors du paiement
    paymentModal.dataset.plan = plan;
}

// Fonction pour fermer le modal
function closeModal() {
    paymentModal.style.display = 'none';
}

// Intégration de Stripe
const stripe = Stripe('votre_clé_publique_stripe'); // Remplacez par votre clé publique Stripe
const elements = stripe.elements();

const style = {
    base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
            color: "#aab7c4"
        }
    },
    invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
    }
};

const card = elements.create("card", { style: style });
card.mount("#card-element");

// Gestion des erreurs de carte
card.on('change', ({error}) => {
    const displayError = document.getElementById('card-errors');
    if (error) {
        displayError.textContent = error.message;
    } else {
        displayError.textContent = '';
    }
});

// Gestion de la soumission du formulaire
const form = document.getElementById('payment-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const plan = paymentModal.dataset.plan;
    let amount;

    // Définir le montant en fonction du plan
    if (plan === 'one-time') {
        amount = 9900; // €99.00 en cents
    } else if (plan === 'monthly') {
        amount = 1000; // €10.00 en cents
    } else if (plan === 'yearly') {
        amount = 10000; // €100.00 en cents
    }

    // Créer le PaymentIntent sur le serveur
    const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({amount: amount, plan: plan}),
    });

    const data = await response.json();

    if (data.error) {
        const displayError = document.getElementById('card-errors');
        displayError.textContent = data.error.message;
        return;
    }

    const {clientSecret} = data;

    const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
        },
    });

    if (result.error) {
        // Inform the user if there was an error
        const displayError = document.getElementById('card-errors');
        displayError.textContent = result.error.message;
    } else {
        if (result.paymentIntent.status === 'succeeded') {
            // Afficher un message de succès
            alert('Paiement réussi !');
            closeModal();
        }
    }
});
