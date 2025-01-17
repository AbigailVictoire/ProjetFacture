package com.news.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.logging.Level;
import java.util.logging.Logger;

import com.news.beans.Users;
import com.news.controllers.CRUDUser;


public class UsersDI implements UsersDao {
	
	public Users getUsers(int id) {
		PreparedStatement req = null;
		Connection cn = GetConnexion.getConnection();
		ResultSet res = null;
		Users user = null;
	
		if (null != cn) {
			try {
				req = cn.prepareStatement("SELECT * FROM users WHERE utilisateur_id=?");
				req.setLong(1, id);
				res = req.executeQuery();
				if (res.next()) {
					user = UserMap(res);
				}
	
			} catch (SQLException ex) {
				Logger.getLogger(CRUDUser.class.getName()).log(Level.SEVERE, null, ex);
			} finally {
				try {
					req.close();
					cn.close();
				} catch (SQLException ex) {
					Logger.getLogger(CRUDUser.class.getName()).log(Level.SEVERE, null, ex);
				}
			}
		}
		return user;
	}
	
	public Users getUsers(String password) {
		PreparedStatement req = null;
		Connection cn = GetConnexion.getConnection();
		ResultSet res = null;
		Users user = null;

		if (null != cn) {
			try {
				req = cn.prepareStatement("SELECT * FROM users WHERE mot_de_passe=?");
				req.setString(1, password);
				res = req.executeQuery();
				if (res.next()) {
					user = UserMap(res);
				}

			} catch (SQLException ex) {
				Logger.getLogger(CRUDUser.class.getName()).log(Level.SEVERE, null, ex);
			} finally {
				try {
					req.close();
					cn.close();
				} catch (SQLException ex) {
					Logger.getLogger(CRUDUser.class.getName()).log(Level.SEVERE, null, ex);
				}
			}
		}
		return user;
	}
	
	public Users getUsers1(String email) {
		PreparedStatement req = null;
		Connection cn = GetConnexion.getConnection();
		ResultSet res = null;
		Users user = null;

		if (null != cn) {
			try {
				req = cn.prepareStatement("SELECT * FROM users WHERE email=?");
				req.setString(1, email);
				res = req.executeQuery();
				if (res.next()) {
					user = UserMap(res);
				}

			} catch (SQLException ex) {
				Logger.getLogger(CRUDUser.class.getName()).log(Level.SEVERE, null, ex);
			} finally {
				try {
					req.close();
					cn.close();
				} catch (SQLException ex) {
					Logger.getLogger(CRUDUser.class.getName()).log(Level.SEVERE, null, ex);
				}
			}
		}
		return user;
	}

	
	private static Users UserMap(ResultSet res) throws SQLException {
		Users user = new Users();
		//PersonnelDI personnelDI = new PersonnelDI();

		user.setUtilisateur_id(res.getLong("utilisateur_id"));
		user.setNom_utilisateur(res.getString("nom_utilisateur"));
		user.setMot_de_passe(res.getString("mot_de_passe"));
		user.setEmail(res.getString("email"));
		user.setProfil_id(res.getString("profil_id"));
		
		return user;
	}

	

	

}
