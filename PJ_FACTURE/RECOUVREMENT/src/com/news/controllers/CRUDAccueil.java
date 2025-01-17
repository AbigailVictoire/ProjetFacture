package com.news.controllers;

import java.io.IOException;
import java.util.concurrent.atomic.AtomicReference;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet("/Accueil")
public class CRUDAccueil extends HttpServlet{

	private static final long serialVersionUID = 1L;
    //public static final String INDEX 	= "/index.jsp";
	private static final String ACCUEIL = "/WEB-INF/views/accueil.jsp";
	
	
	AtomicReference<String> errorMsg = new  AtomicReference<>("");
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		String page = request.getParameter("page");
		
		request.setAttribute("page", page);
		this.getServletContext().getRequestDispatcher(ACCUEIL).forward(request, response);
		
	}
    
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		String page = request.getParameter("page");
		

		request.setAttribute("page", page);
		this.getServletContext().getRequestDispatcher(ACCUEIL).forward(request, response);
		
	}
	
	
	/*AtomicReference<String> errorMsg = new  AtomicReference<>("");
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		String page = request.getParameter("page");
		
		request.setAttribute("page", page);
		this.getServletContext().getRequestDispatcher(ACCUEIL).forward(request, response);
		
	}
    
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		String page = request.getParameter("page");
		

		request.setAttribute("page", page);
		this.getServletContext().getRequestDispatcher(ACCUEIL).forward(request, response);
		
	}*/

}
