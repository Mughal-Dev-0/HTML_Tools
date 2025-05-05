function generateIframe() {
      const src = document.getElementById("iframeSrc").value;
      const width = document.getElementById("iframeWidth").value;
      const height = document.getElementById("iframeHeight").value;
      const allow = document.getElementById("iframeAllow").value;
      const code = `<iframe src="${src}" width="${width}" height="${height}" ${allow ? 'allowfullscreen' : ''}></iframe>`;
      document.getElementById("iframeCode").innerText = code;
    }

    function generateList() {
      const type = document.getElementById("listType").value;
      const items = document.getElementById("listItems").value.split(",");
      let code = `<${type}>\n`;
      items.forEach(item => {
        code += `  <li>${item.trim()}</li>\n`;
      });
      code += `</${type}>`;
      document.getElementById("listCode").innerText = code;
    }

    function generateTable() {
      const rows = parseInt(document.getElementById("tableRows").value);
      const cols = parseInt(document.getElementById("tableCols").value);
      let code = `<table border="1">\n`;
      for (let i = 0; i < rows; i++) {
        code += "  <tr>\n";
        for (let j = 0; j < cols; j++) {
          code += `    <td>Row ${i+1} Col ${j+1}</td>\n`;
        }
        code += "  </tr>\n";
      }
      code += `</table>`;
      document.getElementById("tableCode").innerText = code;
    }

    function generateImageLink() {
      const img = document.getElementById("imgUrl").value;
      const alt = document.getElementById("imgAlt").value;
      const link = document.getElementById("linkUrl").value;
      const text = document.getElementById("linkText").value;
      const code = `<img src="${img}" alt="${alt}" />\n<a href="${link}">${text}</a>`;
      document.getElementById("imgLinkCode").innerText = code;
    }
    
    
    function generateNavbar() {
      const logoText = document.getElementById("navLogoText").value.trim();
      const logoImg = document.getElementById("navLogoImg").value.trim();
      const items = document.getElementById("navItems").value.split(",");
      const links = document.getElementById("navLinks").value.split(",");

      let code = `<nav style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:#333;color:#fff;">\n`;

      if (logoImg) {
        code += `  <img src="${logoImg}" alt="Logo" style="height:40px;">\n`;
      } else if (logoText) {
        code += `  <h1 style="margin:0;">${logoText}</h1>\n`;
      }

      code += `  <ul style="list-style:none;display:flex;gap:15px;margin:0;">\n`;
      items.forEach((item, i) => {
        const name = item.trim();
        const href = links[i] ? links[i].trim() : "#";
        code += `    <li><a href="${href}" style="color:#fff;text-decoration:none;">${name}</a></li>\n`;
      });
      code += `  </ul>\n</nav>`;

      document.getElementById("navbarCode").innerText = code;
    }
    
    function toggleTheme() {
      document.body.classList.toggle("light");
    }

    function generateButton() {
      const text = document.getElementById("btnText").value;
      const type = document.getElementById("btnType").value;
      const link = document.getElementById("btnLink").value;
      let style = "";

      if (type === "shadow") {
        style = "box-shadow: 2px 2px 10px #00ffcc;";
      } else if (type === "rounded") {
        style = "border-radius: 20px;";
      } else if (type === "link") {
        document.getElementById("buttonCode").innerText = `<a href='${link}' style='padding:10px 20px;background:#00ffcc;color:black;text-decoration:none;border-radius:5px;'>${text}</a>`;
        return;
      }

      const code = `<button style='background:#00ffcc;color:#000;padding:10px 20px;${style}'>${text}</button>`;
      document.getElementById("buttonCode").innerText = code;
    }

    function generateForm() {
      const count = parseInt(document.getElementById("formCount").value);
      const types = document.getElementById("formTypes").value.split(",");
      const labels = document.getElementById("formLabels").value.split(",");
      let code = `<form style='display:flex;flex-direction:column;gap:10px;'>\n`;
      for (let i = 0; i < count; i++) {
        code += `  <label>${labels[i] || "Field" + (i+1)}</label>\n`;
        code += `  <input type='${types[i] || "text"}' placeholder='${labels[i] || "Field" + (i+1)}' style='padding:10px;border:1px solid #ccc;border-radius:5px;'>\n`;
      }
      code += `</form>`;
      document.getElementById("formCode").innerText = code;
    }
    
    
    
    