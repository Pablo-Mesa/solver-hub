'use strict';
// Función drawCube original, extraída de tool-kit-v002.js.
// No se importan otras utilidades de la aplicación.
function drawCube(element, title, tamanho){    

    const donde_se_agrega = document.getElementById(element) || document.querySelector(element);
        
    const membrete = document.createElement('div');
    membrete.setAttribute("class", "header-title");
    
    const container_cube = document.createElement('div');
    container_cube.setAttribute("class", "container-cube");
    
    const cube = document.createElement('div');
    cube.setAttribute("class", "cube");
    container_cube.style.setProperty('--cube-size', tamanho);
    
    const cara_uno = document.createElement('div');
    cara_uno.setAttribute("id", "uno");
    cara_uno.setAttribute("class", "cara");
    
    const cara_dos = document.createElement('div');
    cara_dos.setAttribute("id", "dos");
    cara_dos.setAttribute("class", "cara");
    
    const cara_tres = document.createElement('div');
    cara_tres.setAttribute("id", "tres");
    cara_tres.setAttribute("class", "cara");

    const cara_cuatro = document.createElement('div');
    cara_cuatro.setAttribute("id", "cuatro");
    cara_cuatro.setAttribute("class", "cara");
    
    const cara_cinco = document.createElement('div');
    cara_cinco.setAttribute("id", "cinco");
    cara_cinco.setAttribute("class", "cara");
    
    const cara_seis = document.createElement('div');
    cara_seis.setAttribute("id", "seis");
    cara_seis.setAttribute("class", "cara");
        
    cube.appendChild(cara_uno);    
    cube.appendChild(cara_dos);
    cube.appendChild(cara_tres);
    cube.appendChild(cara_cuatro);
    cube.appendChild(cara_cinco);
    cube.appendChild(cara_seis);
    container_cube.appendChild(cube);
    
    const container_title = document.createElement('div');
    container_title.setAttribute("class", "header-h");
    
    const titleH1 = document.createElement('h1');
    titleH1.textContent = 'Solver';
    const titleH3 = document.createElement('h3');
    titleH3.textContent = 'Desarrollo de soluciones';
    titleH3.setAttribute("id", "idUsuarioActivo");
    
    container_title.appendChild(titleH1);
    container_title.appendChild(titleH3);
    
    membrete.appendChild(container_cube);
    
    if(title) membrete.appendChild(container_title);
    
    donde_se_agrega.appendChild(membrete);
    
}
