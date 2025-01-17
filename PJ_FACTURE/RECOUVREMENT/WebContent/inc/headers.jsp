<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
	
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Icônes de réseaux sociaux</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
<style>

  h3 {
      font-size : 45px ; 
      color : black ;
      text-align : center ;
  }
  
  .header {
          display: flex ;
          justify-content : space-between;
          align-items : center ;
          padding : 5px 8px ;
          background-color : orange;
          
  }
  
  
    .social-icons {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
        
    }

    .social-icons a {
        margin: 0 10px;
        color: #fff; /* Couleur du texte */
        text-decoration: none;
        font-size: 24px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .facebook {
        background-color: #3b5998; /* Bleu Facebook */
    }

    .twitter {
        background-color: #1da1f2; /* Bleu Twitter */
    }

    .instagram {
        background-color: #bc2a8d; /* Rose Instagram */
    }

    .messenger {
        background-color: #0084ff; /* Bleu Messenger */
    }
  
  
</style>
</head>
<body>


<section>

<div class="header">
     <div class="container-fluid entg">
		 <h3>FACTURE_RECOUVREMENT</h3>
	</div>
  <div class="social-icons">
    <a href="#" class="facebook" title="Facebook"><i class="fab fa-facebook-f"></i></a>
    <a href="#" class="twitter" title="Twitter"><i class="fab fa-twitter"></i></a>
    <a href="#" class="instagram" title="Instagram"><i class="fab fa-instagram"></i></a>
    <a href="#" class="messenger" title="Messenger"><i class="fab fa-facebook-messenger"></i></a>
</div>
</div>
</section>



<!-- Assurez-vous d'inclure les liens vers les bibliothèques d'icônes appropriées si vous utilisez des icônes de police d'icônes comme Font Awesome -->
<!-- Exemple de lien pour Font Awesome -->
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"> -->

</body>
</html>

	
	