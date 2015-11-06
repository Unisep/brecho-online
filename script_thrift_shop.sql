CREATE DATABASE thrift_shop;

CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  password VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  gender CHAR(1) NOT NULL
);


CREATE TABLE IF NOT EXISTS baskets(
  id SERIAL PRIMARY KEY,
  total DECIMAL(16,6) NOT NULL DEFAULT 0,
  ship_date DATE NOT NULL DEFAULT CURRENT_DATE,
  lessee_id INT NOT NULL,
  
  CONSTRAINT fk_baskets_users1
    FOREIGN KEY (lessee_id)
    REFERENCES users (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);
 
CREATE INDEX fk_baskets_users1_idx ON baskets (lessee_id ASC);

CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(25) NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  description VARCHAR(200) NOT NULL,
  price DECIMAL(16, 6) NULL,
  category_id INT NOT NULL,
  
  CONSTRAINT fk_products_categories
    FOREIGN KEY (category_id)
    REFERENCES categories (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS attachments (
  id SERIAL PRIMARY KEY,
  filename VARCHAR(50) NOT NULL,
  product_id INT NOT NULL,
  
  CONSTRAINT fk_attachments_products
    FOREIGN KEY (product_id)
    REFERENCES products (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS products_has_baskets (
  products_id INT NOT NULL,
  baskets_id INT NOT NULL,
  PRIMARY KEY (products_id, baskets_id),
  
  CONSTRAINT fk_products_has_baskets_products
    FOREIGN KEY (products_id)
    REFERENCES products (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  
  CONSTRAINT fk_products_has_baskets_baskets1
    FOREIGN KEY (baskets_id)
    REFERENCES baskets (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);
 
CREATE INDEX fk_products_has_baskets_baskets1_idx ON products_has_baskets (baskets_id ASC);
CREATE INDEX fk_products_has_baskets_products_idx ON products_has_baskets (products_id ASC);
