package com.news.dao;

import com.news.beans.Users;

public  interface UsersDao {

	/* ++++ LES METHODES TROUVER ++++ */
    public Users getUsers(int id);
    public  Users getUsers1(String email);
    public Users getUsers(String password);
	
}