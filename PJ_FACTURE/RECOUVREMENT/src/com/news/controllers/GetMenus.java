package com.news.controllers;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;

@WebServlet("/menus")
public class GetMenus extends HttpServlet {
	private static final long serialVersionUID = 1L;
	public static final String INDEX 	= "/index.jsp";
	private static final String ACCUEIL = "/WEB-INF/views/accueil.jsp";
       
	private static final String FORMAT_DATE = "yyy-MM-dd";
	
	
	public static final String ADMINISTRATION = "/WEB-INF/views/administration.jsp";
	public static final String RESSOURCE_HUMAINES = "/WEB-INF/views/RessourceHumaine.jsp";
	public static final String COMPTABILITE = "/WEB-INF/views/comptabilite.jsp";
	public static final String PARTENAIRE = "/WEB-INF/views/partenaire.jsp";
	public static final String STATISTIQUE = "/WEB-INF/views/statistique.jsp";
	public static final String PATRIMOINE = "/WEB-INF/views/patrimoines.jsp";
	public static final String DECONNEXION = "/index.jsp";
	public static final String PARAMETRES = "/WEB-INF/views/paramtres.jsp";
	
	
	

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		String menu = request.getParameter("menu");
		String id = request.getParameter("id");
		//String submit	=	request.getParameter("submit");
		String ch = request.getParameter("ch");
		
		DateTime dt = new DateTime();
		org.joda.time.format.DateTimeFormatter formatter = DateTimeFormat.forPattern(FORMAT_DATE);
		String dating = dt.toString(formatter);


		if ("accueil".equals(menu)) {

			request.setAttribute("page", menu);
			this.getServletContext().getRequestDispatcher(ACCUEIL).forward(request, response);
		}
	
	
	
if("administrations".equals(menu)) {
			
			request.setAttribute("page", menu);
			this.getServletContext().getRequestDispatcher(ADMINISTRATION).forward(request, response);
		}
		
	
if("RessourceHumaines".equals(menu)) {
	
	request.setAttribute("page", menu);
	this.getServletContext().getRequestDispatcher(RESSOURCE_HUMAINES).forward(request, response);
}

if("comptabilites".equals(menu)) {

request.setAttribute("page", menu);
this.getServletContext().getRequestDispatcher(COMPTABILITE).forward(request, response);
}	
	
if("partenaires".equals(menu)) {

request.setAttribute("page", menu);
this.getServletContext().getRequestDispatcher(PARTENAIRE).forward(request, response);
}	
	
if("statistiques".equals(menu)) {

request.setAttribute("page", menu);
this.getServletContext().getRequestDispatcher(STATISTIQUE).forward(request, response);
}	

if("Patrimoines".equals(menu)) {

request.setAttribute("page", menu);
this.getServletContext().getRequestDispatcher(PATRIMOINE).forward(request, response);
}	
	
if("deconnexion".equals(menu)) {

request.setAttribute("page", menu);
this.getServletContext().getRequestDispatcher(DECONNEXION).forward(request, response);
}	
	
if("Parametre".equals(menu)) {

request.setAttribute("page", menu);
this.getServletContext().getRequestDispatcher(PARAMETRES).forward(request, response);
}	
	
	
	}

	
	

}
