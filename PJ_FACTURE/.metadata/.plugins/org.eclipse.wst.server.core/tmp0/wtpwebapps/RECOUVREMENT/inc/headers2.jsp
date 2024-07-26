<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div class="container-fluid entg">
	<div class="colorVert">
		<h3>FACTURES_RECOUVREMENT<span><a href="<c:url value="/Accueil"/>">Retour</a></span></h3>
	</div>
	
	<div class="wrapper">
		<ul class="nav navbar-nav">
				<li class="active"><a href="<c:url value="/menus?menu=accueil"/>"><i class="fa fa-home" id="accueil"></i></a></li>
				<li class="pad"><a href="<c:url value="/menus?menu=RessourceHumaines"/>" class="">RESSOURCES HUMAINES</a></li>
				<li class="pad"><a href="<c:url value="/menus?menu=comptabilites"/>" class="">COMPTABILITES</a></li>
				<li class="pad"><a href="<c:url value="/menus?menu=statistiques"/>" class="">STATISTIQUES</a></li>
				<li class="pad"><a href="<c:url value="/menus?menu=partenaires"/>" class="">PARTENAIRES</a></li>
				<li class="pad"><a href="<c:url value="/menus?menu=parametres"/>" class="">PARAMETRES</a></li>
		</ul>
	</div>
	<div class="clr"></div>
</div>