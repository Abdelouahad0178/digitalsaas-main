// =====================
// 1. Traductions
// =====================

const translations = {
    fr: {
        features: "Fonctionnalités",
        pricing: "Tarifs",
        about: "À Propos",
        blog: "Blog",
        contact: "Contact",
        login: "Connexion",
        heroTitle: "Découvrez Notre Solution DIGITALE Avancée",
        heroSubtitle: "Optimisez votre activité avec nos outils digitaux puissants.",
        heroButton: "Commencer Maintenant",
        featuresTitle: "Fonctionnalités",
        feature1Title: "Gestion Intelligente",
        feature1Desc: "Optimisez vos processus avec notre gestion intelligente.",
        feature2Title: "Analyse Avancée",
        feature2Desc: "Des outils d'analyse puissants pour prendre des décisions éclairées.",
        feature3Title: "Support 24/7",
        feature3Desc: "Une assistance disponible à tout moment pour vous aider.",
        pricingTitle: "Tarifs",
        pricingOption1: "Vente Directe",
        pricingOption1Price: "990 DHS",
        pricingOption1Features: ["Accès complet", "Mises à jour gratuites", "Support standard"],
        pricingOption2: "Location Mensuelle",
        pricingOption2Price: "100 DHS/mois",
        pricingOption2Features: ["Accès complet", "Mises à jour régulières", "Support prioritaire"],
        pricingOption3: "Location Annuelle",
        pricingOption3Price: "1000 DHS/an",
        pricingOption3Features: ["Accès complet", "Mises à jour régulières", "Support prioritaire"],
        footerAbout: "Votre partenaire pour des solutions digitales innovantes.",
        footerLinks: "Liens Utiles",
        footerContact: "Contact",
        footerEmail: "Email: support@monsaas.com",
        footerPhone: "Téléphone: +212773794893",
        footerRights: "&copy; 2024 W DIGITAL. Tous droits réservés.",
        paymentTitle: "Paiement",
        paymentButton: "Payer",
        paymentSuccess: "Paiement réussi !",
        paymentError: "Une erreur est survenue. Veuillez réessayer plus tard.",
        buyNow: "Acheter Maintenant",
        subscribe: "S'abonner"
    },
    en: {
        features: "Features",
        pricing: "Pricing",
        about: "About",
        blog: "Blog",
        contact: "Contact",
        login: "Login",
        heroTitle: "Discover Our Advanced DIGITAL Solution",
        heroSubtitle: "Optimize your business with our powerful digital tools.",
        heroButton: "Get Started Now",
        featuresTitle: "Features",
        feature1Title: "Smart Management",
        feature1Desc: "Optimize your processes with our smart management.",
        feature2Title: "Advanced Analytics",
        feature2Desc: "Powerful analytics tools to make informed decisions.",
        feature3Title: "24/7 Support",
        feature3Desc: "Assistance available at any time to help you.",
        pricingTitle: "Pricing",
        pricingOption1: "One-Time Purchase",
        pricingOption1Price: " $99",
        pricingOption1Features: ["Full Access", "Free Updates", "Standard Support"],
        pricingOption2: "Monthly Subscription",
        pricingOption2Price: "$10/month",
        pricingOption2Features: ["Full Access", "Regular Updates", "Priority Support"],
        pricingOption3: "Annual Subscription",
        pricingOption3Price: "$100/year",
        pricingOption3Features: ["Full Access", "Regular Updates", "Priority Support"],
        footerAbout: "Your partner for innovative digital solutions.",
        footerLinks: "Useful Links",
        footerContact: "Contact",
        footerEmail: "Email: support@monsaas.com",
        footerPhone: "Phone: +212773794893",
        footerRights: "&copy; 2024 W DIGITAL. All rights reserved.",
        paymentTitle: "Payment",
        paymentButton: "Pay",
        paymentSuccess: "Payment successful!",
        paymentError: "An error occurred. Please try again later.",
        buyNow: "Buy Now",
        subscribe: "Subscribe"
    },
    ar: {
        features: "الميزات",
        pricing: "التسعير",
        about: "حول",
        blog: "مدونة",
        contact: "اتصل",
        login: "تسجيل الدخول",
        heroTitle: "اكتشف حلنا الرقمي المتقدم",
        heroSubtitle: "قم بتحسين نشاطك التجاري باستخدام أدواتنا الرقمية القوية.",
        heroButton: "ابدأ الآن",
        featuresTitle: "الميزات",
        feature1Title: "إدارة ذكية",
        feature1Desc: "قم بتحسين عملياتك باستخدام إدارتنا الذكية.",
        feature2Title: "تحليل متقدم",
        feature2Desc: "أدوات تحليل قوية لاتخاذ قرارات مستنيرة.",
        feature3Title: "دعم 24/7",
        feature3Desc: "مساعدة متاحة في أي وقت لمساعدتك.",
        pricingTitle: "التسعير",
        pricingOption1: "شراء لمرة واحدة",
        pricingOption1Price: "990 درهم",
        pricingOption1Features: ["وصول كامل", "تحديثات مجانية", "دعم قياسي"],
        pricingOption2: "اشتراك شهري",
        pricingOption2Price: "100 درهم/شهر",
        pricingOption2Features: ["وصول كامل", "تحديثات منتظمة", "دعم أولوية"],
        pricingOption3: "اشتراك سنوي",
        pricingOption3Price: "1000 درهم/سنة",
        pricingOption3Features: ["وصول كامل", "تحديثات منتظمة", "دعم أولوية"],
        footerAbout: "شريكك لحلول رقمية مبتكرة.",
        footerLinks: "روابط مفيدة",
        footerContact: "اتصل",
        footerEmail: "البريد الإلكتروني: support@monsaas.com",
        footerPhone: "الهاتف: +212773794893",
        footerRights: "&copy; 2024 W DIGITAL. جميع الحقوق محفوظة.",
        paymentTitle: "الدفع",
        paymentButton: "دفع",
        paymentSuccess: "تم الدفع بنجاح!",
        paymentError: "حدث خطأ. الرجاء المحاولة مرة أخرى لاحقًا.",
        buyNow: "شراء الآن",
        subscribe: "اشتراك"
    }
};

// =====================
// 2. Gestion de la Langue
// =====================

/**
 * Fonction pour changer la langue du site
 * @param {string} lang - Langue sélectionnée ('fr', 'en', 'ar')
 */
function setLanguage(lang) {
    // Vérifier si la langue existe dans les traductions
    if (!translations[lang]) return;

    // Mettre à jour les textes basés sur data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.'); // Pour gérer les clés imbriquées
        let text = translations[lang];
        keys.forEach(k => {
            if (text) {
                text = text[k];
            }
        });
        if (text) {
            element.textContent = text;
        }
    });

    // Changer la direction pour l'arabe
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }

    // Mettre à jour l'attribut lang
    document.documentElement.setAttribute('lang', lang);

    // Stocker la langue sélectionnée dans le localStorage
    localStorage.setItem('language', lang);
}

// Gestion du changement de langue via le sélecteur
document.getElementById('language-select').addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
});

// Initialiser la langue par défaut ou la langue stockée
const savedLanguage = localStorage.getItem('language') || 'fr';
document.getElementById('language-select').value = savedLanguage;
setLanguage(savedLanguage);

// =====================
// 3. Gestion du Menu Hamburger
// =====================

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

/**
 * Fonction pour ouvrir/fermer le menu hamburger
 */
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active'); // Optionnel : pour animer l'icône hamburger
});

/**
 * Fermer le menu hamburger lorsqu'un lien est cliqué
 */
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active'); // Optionnel
        }
    });
});

// =====================
// 4. Gestion du Modal de Paiement
// =====================

const paymentModal = document.getElementById('payment-modal');
const closeButton = document.querySelector('.close-button');

/**
 * Fonction pour ouvrir le modal de paiement
 * @param {string} plan - Type de plan sélectionné ('one-time', 'monthly', 'yearly')
 */
function openModal(plan = 'one-time') {
    paymentModal.style.display = 'block';
    // Stocker le type de plan sélectionné pour l'utiliser lors du paiement
    paymentModal.dataset.plan = plan;
}

/**
 * Fonction pour fermer le modal de paiement
 */
function closeModal() {
    paymentModal.style.display = 'none';
}

// Événements d'ouverture du modal
document.getElementById('buy-now').addEventListener('click', () => {
    openModal('one-time');
});

document.getElementById('subscribe-monthly').addEventListener('click', () => {
    openModal('monthly');
});

document.getElementById('subscribe-yearly').addEventListener('click', () => {
    openModal('yearly');
});

// Événement de fermeture du modal
closeButton.addEventListener('click', () => {
    closeModal();
});

// Fermer le modal lorsqu'on clique en dehors de celui-ci
window.addEventListener('click', (e) => {
    if (e.target == paymentModal) {
        closeModal();
    }
});

// =====================
// 5. Intégration de Stripe
// =====================

// Remplacez 'votre_clé_publique_stripe' par votre véritable clé publique Stripe
const stripe = Stripe('votre_clé_publique_stripe'); 
const elements = stripe.elements();

// Style pour les éléments Stripe
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

// Créer et monter l'élément carte
const card = elements.create("card", { style: style });
card.mount("#card-element");

// Gestion des erreurs de carte en temps réel
card.on('change', ({error}) => {
    const displayError = document.getElementById('card-errors');
    if (error) {
        displayError.textContent = error.message;
    } else {
        displayError.textContent = '';
    }
});

// =====================
// 6. Gestion de la Soumission du Formulaire de Paiement
// =====================

const form = document.getElementById('payment-form');

/**
 * Gestionnaire d'événement pour la soumission du formulaire de paiement
 */
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Récupérer la langue sélectionnée
    const lang = localStorage.getItem('language') || 'fr';

    // Récupérer le type de plan sélectionné
    const plan = paymentModal.dataset.plan;
    let amount;

    // Définir le montant en fonction du plan
    if (plan === 'one-time') {
        amount = 9900; // 99.00 MAD en centimes
    } else if (plan === 'monthly') {
        amount = 1000; // 10.00 MAD en centimes
    } else if (plan === 'yearly') {
        amount = 10000; // 100.00 MAD en centimes
    }

    try {
        // Créer le PaymentIntent sur le serveur
        const response = await fetch('https://votre-domaine.com/create-payment-intent', { // Remplacez par l'URL de votre serveur backend
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount, plan: plan }),
        });

        const data = await response.json();

        if (data.error) {
            const displayError = document.getElementById('card-errors');
            displayError.textContent = data.error.message || translations[lang].paymentError;
            return;
        }

        const { clientSecret } = data;

        // Confirmer le paiement avec Stripe
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
            },
        });

        if (result.error) {
            // Informer l'utilisateur en cas d'erreur
            const displayError = document.getElementById('card-errors');
            displayError.textContent = result.error.message;
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                // Afficher un message de succès dans la langue sélectionnée
                alert(translations[lang].paymentSuccess);
                closeModal();
                form.reset();
                card.clear();
            }
        }
    } catch (error) {
        // Gérer les erreurs réseau ou autres
        const displayError = document.getElementById('card-errors');
        displayError.textContent = translations[lang].paymentError;
        console.error('Erreur:', error);
    }
});
