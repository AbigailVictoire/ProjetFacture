package com.news.beans;

public class Users {

	private Long utilisateur_id;
	private String nom_utilisateur;
	private String mot_de_passe;
	private String email;
	private String profil_id;
	
	public Long getUtilisateur_id() { return utilisateur_id; }
	public void setUtilisateur_id(Long utilisateur_id) { this.utilisateur_id = utilisateur_id; }
	
	public String getNom_utilisateur() { return nom_utilisateur; }
    public void setNom_utilisateur(String  nom_utilisateur) { this.nom_utilisateur = nom_utilisateur;}

	public String getMot_de_passe() { return mot_de_passe; }
	public void setMot_de_passe(String mot_de_passe) { this.mot_de_passe = mot_de_passe; }
	
	public String getEmail() { return email; }
	public void setEmail(String email) { this.email = email; }
	
	public String getProfil_id() { return profil_id; }
	public void setProfil_id(String profil_id) { this.profil_id = profil_id; }
	
}
