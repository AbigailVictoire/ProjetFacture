<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="fr">
<head>
	<title>Page de Connexion</title><meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" type="text/css" href="<c:url value="assets/css/bootstrap.min.css" />"/>
	<link rel="stylesheet" href="<c:url value="/assets/css/solid.min.css" />" />
	<style type="text/css">
	@import url(assets/css/css.css);
		html,body,div,h1{
			border: 0;
			font: inherit;
			font-size: 100%;
			margin: 0;padding: 0;
			vertical-align: baseline;
			text-rendering: optimizeLegibility;
		}
		html,body{
			heigth: 100%;
			margin: 0;padding: 0;
			
		}
		body{
			background:  url('assets/facture.jpg') no-repeat fixed;
			background-size: cover;
			color: #FFF;
			font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
			font-size: 12px;
			line-heght: 1;
			
		}
		.background-wrap {
			width : 100%;
			height: 50%;
			position: absolute;
			top: 0;left:0;
			z-index: -1;
			overflow: hidden;
		}
		.background{
			background:;
		}
		
		*{
			box-sizing: border-box;
			cursor: default;outline:none;
		}
		form {
			background: rgba(0, 0, 0, 0.5);border: 1px solid #191919;border-radius: .4em;bottom: 0;
			box-shadow: 0 5px 10px 5px rgb(0,0,0,0.2);height: 450px; left: 0;margin: auto;overflow: hidden;
			position: absolute; right:0%;top: 20%;width: 350px; margin-top: 150px;
		
		}
		form:after {
		  background: -webkit-gradient(linear, left top, right top, from(#111111), color-stop(#444444),
		   color-stop(#b6b6b8), color-stop(#444444), color-stop(#2F2F2F), to(#272727));
		  background: linear-gradient(to right, #111111, #444444, #b6b6b8, #444444, #2F2F2F, #272727);
		  content: "";
		  display: inline;
		  height: 1px;
		  left: 50px;
		  position: absolute;
		  top: 0;
		  width: 150px;
		}
		
		form:before {
		  border-radius: 50%;
		  box-shadow: 0 0 6px 4px #fff;
		  content: "";
		  display: block;
		  height: 5px;
		  left: 34%;
		  position: absolute;
		  top: -7px;
		  width: 8px;
		}
		.inset {
			border-top: 1px solid #19191a;padding: 20px;
		}
		form h1 {
			font-family: 'Audiowide';border-bottom: 1px solid #000;
			font-size: 18px;padding: 15px 0;position: relative;text-align: center;text-shadow: 0 1px 0 #000;
			color: #FFbb00;font-weight: normal;
		}
		form h1.poweron {
		  color: #ffffff;
		  -webkit-transition: all 0.5s;
		  transition: all 0.5s;
		  -webkit-animation: flicker 1s ease-in-out 1 alternate, neon 1.5s ease-in-out infinite alternate;
		          animation: flicker 1s ease-in-out 1 alternate, neon 1.5s ease-in-out infinite alternate;
		  -webkit-animation-delay: 0s, 1s;
		          animation-delay: 0s, 1s;
		}
		form h1:after {
		  position: absolute;
		  width: 250px;
		  height: 180px;
		  content: "";
		  display: block;
		  pointer-events: none;
		  top: 0;
		  margin-left: 138px;
		  -webkit-transform-style: flat;
		          transform-style: flat;
		  -webkit-transform: skew(20deg);
		          transform: skew(20deg);
		  background: -ms-linear-gradient(top, hsla(0,0%,100%,0.1) 0%,hsla(0,0%,100%,0) 100%);
		  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#42ffffff', endColorstr='#00ffffff',
		  GradientType=0 );
		  background: -webkit-gradient(linear, left top, left bottom, from(hsla(0,0%,100%,0.1)),to(hsla(0,0%,100%,0)));
		  background: linear-gradient(to bottom, hsla(0,0%,100%,0.1) 0%,hsla(0,0%,100%,0) 100%);
		
		}
		input[type=email], input[type=password] {
		  background: -webkit-gradient(linear,left top, left bottom,from(#1f2124),to(#27292c));
		  background: linear-gradient(#1f2124,#27292c);
		  border: 1px solid #222;
		  border-radius: .3em;
		  box-shadow: 0 1px 0 rgba(255,255,255,0.1);
		  color: #FFF;
		  font-size: 13px;
		  margin-bottom: 20px;
		  padding: 8px 5px;
		  width: 100%;
		} 
		input[type=email]:disabled, input[type=password]:disabled {
			color: #999;
		}
		button[type=submit] {
		  background: #fb0;
		  border: 1px solid rgba(0,0,0,0.4);
		  border-radius: .3em;
		  box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), inset 0 10px 10px rgba(255,255,255,0.1);
		  color: #873C00;
		  cursor: pointer;
		  font-size: 15px;
		  font-weight: bold;
		  height: 40px;
		  padding: 5px 20px;
		  width: 100%;
		  margin-bottom:35px ;
		}
		button[type=submit]:hover, button[type=submit]:focus {
		  box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -10px 10px rgba(255,255,255,0.1);
		}
		input[type=email]:hover:not([disabled]), 
		input[type=email]:focus, 
		input[type=password]:hover:not([disabled]), 
		input[type=password]:focus, 
		label:hover ~ input[type=email], 
		label:hover ~ input[type=password] {
		  background: #27292c;
		}
		
		a{   
			color:yellow;
			text-decoration:none;
			font-size: 18px;
			margin-left:5rem
			
			
		}
		
		div.lien{
			
		}
		
		
	</style>
</head>
<body>
	<div class="background-wrap">
		<div class="background"></div>
	</div>
	<form id="access" action="<c:url value="/Login"/>" method="post">
		<h1 id="header" class="poweron">CONNEXION</h1>
		<div class="inset">
			<p>
				<input type="email" name="username" id="email" required placeholder="Nom utilisateur">
			</p>
			
			<p>
				<input type="password" name="password" id="password" required placeholder="Mot de passe">
			</p>
			
			<hr>
			
			<button type="submit" name="connexionName" value="connexion">CONNEXION</button>
			
			<div class="lien" style="height:auto;width:100%;margin-bottom:2rem;display:flex">
				 <a class="link" href="forgot-password.jsp">MOT DE PASSE OUBLIE ?</a>
			
			</div>
			   
            
            
            
            <button type="submit" name="inscription" value="inscrire">S'INSCRIRE</button>
			
		</div>
	</form>
</body>
</html>

