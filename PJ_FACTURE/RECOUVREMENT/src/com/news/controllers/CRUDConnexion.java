package com.news.controllers;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.logging.Level;
import java.util.logging.Logger;

import com.news.beans.Users;
import com.news.dao.GetConnexion;
import com.news.dao.UsersDI;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;


@WebServlet("/Login")
public class CRUDConnexion extends HttpServlet {
	
    private static final long serialVersionUID = 1L;
    public static final String INDEX 	= "/index.jsp";
	private static final String ACCUEIL = "/WEB-INF/views/accueil.jsp";
	
	//private static final String FORMAT_DATE 			= "yyy-MM-dd";
	
		private static final String SQL_SELECT_PAR 	=	"SELECT * FROM users WHERE email = ? AND mot_de_passe = ?";
		
		UsersDI userDI = new UsersDI();

		
		Users users	=	new Users();


    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    	HttpSession session = request.getSession();
		session.invalidate();
		response.sendRedirect( request.getContextPath() + INDEX );
	}
    
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		String page = request.getParameter("page");
		String connexionName = request.getParameter("connexionName");
		String password = request.getParameter("password");
		String email = request.getParameter("username");
		
		if(connexionName.equals("connexion")) {
			
			//this.getServletContext().getRequestDispatcher(ACCUEIL).forward(request, response);
		}
		request.setAttribute("page", page);
		this.getServletContext().getRequestDispatcher(ACCUEIL).forward(request, response);
		
	}
	
	/*public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		
		
		
		if(connexionName.equals("connexion")) {
			this.getServletContext().getRequestDispatcher(ACCUEIL).forward(request, response);
		}
		*/
		/*Connection cn = GetConnexion.getConnection();
		PreparedStatement req = null;
		ResultSet resultSet	=	null;
	    
	    try {
			 if (null!=cn ) {				
				req = cn.prepareStatement(SQL_SELECT_PAR);
				req.setString(1, email);
				req.setString(2, password);
				resultSet = req.executeQuery();
				if ( resultSet.next() ) {
					
					String login = resultSet.getString("login");
					users	=	userDI.getUsers(login);
					
									
					
					session.setAttribute("users", users);					
					session.setAttribute("page", page);
					this.getServletContext().getRequestDispatcher(ACCUEIL).forward(request, response);
				} else {
					response.sendRedirect( request.getContextPath() + INDEX );
				}
			 } else {
				 response.sendRedirect( request.getContextPath() + INDEX );
			 }
		
		} catch ( SQLException e ) {
			e.getStackTrace();
		} finally {
			 try {
                 req.close();
                 cn.close();
             } catch (SQLException ex) {
                Logger.getLogger(CRUDConnexion.class.getName()).log(Level.SEVERE, null, ex);
             }
		}*/
		
}
