<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" charset="UTF-8" content="width=device-width, initial-scale=1.0" />
	<title>ACCUEIL</title>
	<link rel="stylesheet" type="text/css" href="<c:url value="assets/css/bootstrap.min.css" />" />
	<link rel="stylesheet" type="text/css" href="<c:url value="assets/css/headers.css" />" />
	<link rel="stylesheet" type="text/css" href="<c:url value="assets/css/styliste.css" />" />
	<link rel="stylesheet" href="assets/fontes/font-awesome.min.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
   <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
	<style type="text/css">
		body{
			background-size: cover;
			color: #FFF;
			font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
			font-size: 12px;
			line-heght: 1;
		}
		.sidebar {
            height: 100vh;
            position: fixed;
            left: 0;
            top: 0;
            width: 300px;
            background-color: #343a40;
            padding-top: 200px;
            display : flex ; 
            flex-direction : column ; 
        }
       
        .sidebar button :hover {
            background-color: #0084ff;
        }
        .content {
            margin-left: 250px;
            padding: 20px;
        }
        .header {
            background-color: #f8f9fa;
            padding: 10px;
            border-bottom: 1px solid #dee2e6;
        }
         .wrapper {
            display: flex;
            flex: 1;
             }
            button {  
                display  : inline-flex;
                align-items : center;
                justify-content: center ;                                     
                width: 280px; /* Largeur du bouton */
                padding: 8px; /* Optionnel : ajout de remplissage pour l'espace intérieur */
                border: none; /* Supprime la bordure par défaut du bouton */
                background-color: #4CAF50; /* Couleur de fond */
                color: white; /* Couleur du texte */
                font-size: 16px; /* Taille de la police */
                 
                
               }   
               .icon-button {
                        margin-right: 5px; /* Espace entre l'icône et le texte */
                        padding-left: 20px; /* Ajustez cette valeur selon votre préférence */
                        position: relative;
                        margin-bottom : 20px ;
                   
                       
               }  
               .button-text {
                       flex : 1 ;
                       text-align : center ;
               } 
               .user-img{
                    width : 100px ;
                    border-radius  : 100% ;
                    border : 1px solid #eee ;
                    display: flex;
                    margin-button : 20px ;
                    
  
               }
               
            
               
               
	</style>
</head>
<body>
<c:import url="/inc/headers.jsp"></c:import>
    <div class="wrapper">
        <div class="sidebar">
         <div class="user" style="heigth:width ; border : 1px solid red ; display: flex;margin-button : 2rem ;" >
          <img src="assets/images/compta.PNG" class="user-img">
         </div>
           <button onclick="liens('administrations');" class="icon-button"> <i class="fas fa-tachometer-alt"></i> <span class="button-text">ADMINISTRATIONS</span></button>
            <button onclick="liens('RessourceHumaines');" class="icon-button"><i class="fas fa-users"></i> <span class="button-text">RESSOURCES HUMAINES</span></button>
            <button onclick="liens('comptabilites');" class="icon-button"><i class="fas fa-calculator"></i> <span class="button-text">COMPTABILITÉS</span></button>
            <button onclick="liens('partenaires');" class="icon-button"><i class="fas fa-handshake"></i> <span class="button-text">PARTENAIRES</span></button>
            <button onclick="liens('statistiques');" class="icon-button"><i class="fas fa-chart-bar"></i> <span class="button-text">STATISTIQUES</span></button>
            <button onclick="liens('Patrimoines');" class="icon-button"><i class="fas fa-building"></i> <span class="button-text">PATRIMOINES</span></button>
            <button onclick="liens('Parametre');" class="icon-button"><i class="fas fa-cogs"></i><span class="button-text">PARAMÈTRES</span></button>
            <button onclick="liens('deconnexion');" class="icon-button"><i class="fas fa-sign-out-alt"></i> <span class="button-text">DÉCONNEXION</span></button>
        </div>
    </div>
    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
   
   
</body>


<script>

		function liens(mode){
			if(mode == 'RessourceHumaines')
				document.location.href = '<c:url value="/menus?menu='+mode+'&ch=v"/>';
		
			if(mode == 'administrations')
				document.location.href = '<c:url value="/menus?menu='+mode+'&ch=v"/>';
			
			if(mode == 'comptabilites')
				document.location.href = '<c:url value="/menus?menu='+mode+'&ch=v"/>';
				
			if(mode == 'partenaires')
				document.location.href = '<c:url value="/menus?menu='+mode+'&ch=v"/>';
			
			if(mode == 'statistiques')
				document.location.href = '<c:url value="/menus?menu='+mode+'&ch=v"/>';
			
			if(mode == 'Patrimoines')
				document.location.href = '<c:url value="/menus?menu='+mode+'&ch=v"/>';
				
			if(mode == 'deconnexion')
				document.location.href = '<c:url value="/menus?menu='+mode+'&ch=v"/>';	
			
				
			if(mode == 'Parametre')
				document.location.href = '<c:url value="/menus?menu='+mode+'&ch=v"/>';	
			
		}
		
		
	</script>
	
	
	

</html>