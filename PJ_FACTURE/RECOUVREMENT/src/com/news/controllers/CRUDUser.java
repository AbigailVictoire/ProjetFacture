package com.news.controllers;

import java.io.IOException;
	import java.util.concurrent.atomic.AtomicReference;

	import com.news.beans.*;
	import com.news.dao.UsersDI;
	//import com.news.fonctions.VerifieSession;

	import jakarta.servlet.ServletException;
	import jakarta.servlet.annotation.WebServlet;
	import jakarta.servlet.http.HttpServlet;
	import jakarta.servlet.http.HttpServletRequest;
	import jakarta.servlet.http.HttpServletResponse;
	import jakarta.servlet.http.HttpSession;
	@WebServlet("/utilisateurs")
	public class CRUDUser extends HttpServlet {
		private static final long serialVersionUID = 1L;
		public static final String INDEX 	= "/index.jsp";
		
		UsersDI userDI = new UsersDI();
		Users util	=	new Users();
		
		Users users	=	new Users();
		
		AtomicReference<String> errorMsg = new  AtomicReference<>("");

		public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			HttpSession session = request.getSession();
			String crud	=	request.getParameter("crud");
			String page	=	request.getParameter("page");
			String id	=	request.getParameter("id");
			
		
			if(crud.equals("id")) {	
				util = userDI.getUsers(Integer.parseInt(id));
				request.setAttribute("accueil", util);
			}
			
			
			request.setAttribute("page", page);
			this.getServletContext().getRequestDispatcher(INDEX).forward(request, response);
		}
  }

