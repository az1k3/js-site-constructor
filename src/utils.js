export function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div>`;
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`;
}

export function css(styles = {}) {
    if (typeof styles === 'string') return styles;
    const toString = key => `${key}: ${styles[key]}`;
    return Object.keys(styles).map(toString).join(';');
}

export function block(type) {
    return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `;
}

export const colValue = `
                  Пример создания контента: <br>
                  value = Азамат, <br>
                  styles = color: red; text-align: center;
`;

export const colColors = `Цвет текста: <br>
    color: red; <br>
    color: black; <br>
    color: blue; <br>
    color: red; <br>
    color: purple<br>
    
`;

export const colAlign = `Положение текста: <br>
   text-align: center; <br>
   text-align: left; <br> 
   text-align: right;<br>
`;

export const colSize = `Размер текста: <br>
  font-size: 16px; <br>
  font-size: 22px; <br>
  font-size: 26px; <br>
  font-size: 32px; <br>
`;