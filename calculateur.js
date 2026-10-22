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

const montant_final = montant_ttc + frais_livraison;

const prix_moyen = montant_ttc / quantite;

console.log("Quantite : ", quantite);
console.log("Montant des produits : ", montant_total, "FCFA");
console.log("TVA (18%) : ", montant_tva, "FCFA");
console.log("Montant TTC : ", montant_ttc, "FCFA");
console.log("Livraison : ", frais_livraison, "FCFA");
console.log("TOTAL A PAYER: ", montant_final, "FCFA");
console.log("Prix moyen TTC par produit", prix_moyen, "FCFA");

console.log("Type du nom : ", typeof(nom_client));
console.log("Type du prix : ", typeof(prix_unitaire));
console.log("Type de la quantité : ", typeof(quantite));







