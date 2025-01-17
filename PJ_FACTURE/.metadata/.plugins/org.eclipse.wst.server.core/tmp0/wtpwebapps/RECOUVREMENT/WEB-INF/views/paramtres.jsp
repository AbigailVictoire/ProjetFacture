<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" charset="UTF-8"
	content="width=device-width, initial-scale=1.0" />
<title>PARAMETRES</title>
<link rel="stylesheet" type="text/css" href="<c:url value="assets/css/bootstrap.min.css" />" />
<link rel="stylesheet" type="text/css" href="<c:url value="assets/css/headers.css" />" />
<link rel="stylesheet" type="text/css" href="<c:url value="assets/css/styliste.css" />" />
<link rel="stylesheet" href="assets/fontes/font-awesome.min.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
 

</head>
<body>
	<c:import url="/WEB-INF/views/accueil2.jsp"></c:import>
	
	<div class="container-fluid">
		<div class="mesMenus">
			<div class="gdEntete">
				<div class="fontImg">
					<img src="<c:url value="/assets/images/settings-icon.jpg"/>"/>
				</div>
				<h1>PARAMETRES</h1>
			</div>
			<div class="row bmenu"  style="overflow-y:auto;border : 4px solid blue ;width : auto ;heigth : auto ; display : flex ;" >
				<div class="col-xs-6 col-sm-4 col-md-3" style=" border : 1px solid red  ;width : auto ;heigth : auto ;" ><button class="icon-button" style="  ;width : 25rem ;heigth : 20px ;"><i class="fas fa-user"></i> UTILISATEURS</button></div>
				<div class="col-xs-6 col-sm-4 col-md-3" style=" border : 1px solid red ;width : auto ;heigth : auto ;"><button class="icon-button"  style="  ;width : 25rem ;heigth : 20px ;"><i class="fas fa-key"></i> ACCESS</button></div>
				<div class="col-xs-6 col-sm-4 col-md-3" style=" border : 1px solid red ;width : auto ;heigth : auto ;"><button class="icon-button"  style="  ;width : 25rem ;heigth : 20px ;"><i class="fas fa-id-badge"></i> PROFILS</button></div>
				<div class="col-xs-6 col-sm-4 col-md-3" style=" border : 1px solid red ;width : auto ;heigth : auto ;"><button class="icon-button"  style="  ;width : 25rem ;heigth : 20px ;"><i class="fas fa-building"></i> SOCIÉTÉS</button></div>
				<div class="col-xs-6 col-sm-4 col-md-3" style=" border : 1px solid red ;width : auto ;heigth : auto ;"><button class="icon-button"  style="  ;width : 25rem ;heigth : 20px ;"><i class="fas fa-briefcase"></i> POSTES</button></div>
				<div class="col-xs-6 col-sm-4 col-md-3" style=" border : 1px solid red ;width : auto ;heigth : auto ;"><button class="icon-button"  style="  ;width : 25rem ;heigth : 20px ;"><i class="fas fa-wallet"></i> COMPTES</button></div>
				<div class="col-xs-6 col-sm-4 col-md-3" style=" border : 1px solid red ;width : auto ;heigth : auto ;"><button class="icon-button"  style="  ;width : 25rem ;heigth : 20px ;"><i class="fas fa-cash-register"></i> CAISSES</button></div>
				<div class="col-xs-6 col-sm-4 col-md-3" style=" border : 1px solid red ;width : auto ;heigth : auto ;"><button class="icon-button"  style="  ;width : 25rem ;heigth : 20px ;"><i class="fas fa-calendar-alt"></i> CALENDRIERS CAISSES</button></div>
				<div class="col-xs-6 col-sm-4 col-md-3" style=" border : 1px solid red ;width : auto ;heigth : auto ;"><button class="icon-button"  style="  ;width : 25rem ;heigth : 20px ;"><i class="fas fa-globe"></i> PAYS</button></div>
				<div class="col-xs-6 col-sm-4 col-md-3" style=" border : 1px solid red ;width : auto ;heigth : auto ;"><button class="icon-button"  style="  ;width : 25rem ;heigth : 20px ;"><i class="fas fa-map"></i> RÉGIONS</button></div>
				<div class="col-xs-6 col-sm-4 col-md-3" style=" border : 1px solid red ;width : auto ;heigth : auto ;"><button class="icon-button"  style="  ;width : 25rem ;heigth : 20px ;"><i class="fas fa-map-signs"></i> DÉPARTEMENTS</button></div>
				<div class="col-xs-6 col-sm-4 col-md-3" style=" border : 1px solid red ;width : auto ;heigth : auto ;"><button class="icon-button"  style="  ;width : 25rem ;heigth : 20px ;"><i class="fas fa-city"></i> VILLES</button></div>
				<div class="col-xs-6 col-sm-4 col-md-3" style=" border : 1px solid red ;width : auto ;heigth : auto ;"><button class="icon-button"  style="  ;width : 25rem ;heigth : 20px ;"><i class="fas fa-landmark"></i> COMMUNES</button></div>
				<div class="col-xs-6 col-sm-4 col-md-3" style=" border : 1px solid red ;width : auto ;heigth : auto ;"><button class="icon-button"  style="  ;width : 25rem ;heigth : 20px ;"><i class="fas fa-home"></i> QUARTIERS</button></div>
				<div class="col-xs-6 col-sm-4 col-md-3" style=" border : 1px solid red ;width : auto ;heigth : auto ;"><button class="icon-button"  style="  ;width : 25rem ;heigth : 20px ;"><i class="fas fa-save"></i> SAUVEGARDES</button></div>
				<div class="col-xs-6 col-sm-4 col-md-3" style=" border : 1px solid red ;width : auto ;heigth : auto ;"><button class="icon-button"  style="  ;width : 25rem ;heigth : 20px ;"><i class="fas fa-shield-alt"></i> SÉCURITÉS</button></div>
			</div>
		</div>
	</div>
	<div class="loadIcon" id="loadIcons">
		<div id="loads">
			<img alt="" src="<c:url value="/assets/images/icones/loader.gif"/>">
		</div>
	</div>
	
	<script src="<c:url value="/assets/js/jquery.min.js" />" type="text/javascript"></script>
	<script src="<c:url value="/assets/js/bootstrap.min.js" />" type="text/javascript"></script>
	<script src="<c:url value="/assets/js/miseAJourSoldes.js" />" type="text/javascript"></script>
	<script src="<c:url value="/assets/js/newVersion.js" />" type="text/javascript"></script>
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	 <!--<script>
		(function (){
			var Win = window.innerHeight;
			$(".bmenu").css('height', Win - 370+'px');
		}());
		function liens(mode){
			
			if(mode == 'profils')
				document.location.href='<c:url value="/menus?menu='+mode+'&submit=idp&ch=v"/>';
				
			if(mode == 'banque')
				document.location.href='<c:url value="/menus?menu='+mode+'&ch=v"/>';
				
			if(mode == 'services')
				document.location.href='<c:url value="/menus?menu='+mode+'&ch=v"/>';
				
			if(mode == 'profilRole')
				document.location.href='<c:url value="/menus?menu='+mode+'&ch=v"/>';
				
			if(mode == 'utilisateurs')
				document.location.href='<c:url value="/menus?menu='+mode+'&ch=v"/>';
			
			if(mode == 'societes')
				document.location.href='<c:url value="/menus?menu='+mode+'&ch=v"/>';
			
			if(mode == 'devises')
				document.location.href='<c:url value="/menus?menu='+mode+'&ch=v"/>';
			
			if(mode == 'comptes')
				document.location.href='<c:url value="/menus?menu='+mode+'&ch=v"/>';
				
				
			if(mode == 'typeDecaisses')
				document.location.href='<c:url value="/menus?menu='+mode+'&ch=v"/>';
				
			if(mode == 'validateurs')
				document.location.href='<c:url value="/menus?menu='+mode+'&ch=v"/>';
			
		}
	
	</script> -->
</body>
</html>