const nom_client = "Awa";
const nom_produit = "Ordinateur";
const prix_unitaire = 250000;
const quantite = 2;
const frais_livraison = 5000;
const taux_tva = 0.18;

console.log("===RECU DE COMMANDE===");
console.log("Client: ", nom_client);
console.log("Produit: ", nom_produit);
console.log("Prix unitaire: ", prix_unitaire," FCFA");

const montant_total = prix_unitaire * quantite;

const montant_tva = montant_total * taux_tva;

const montant_ttc = montant_total + montant_tva;
