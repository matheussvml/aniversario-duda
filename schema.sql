-- Execute este script no MySQL Workbench conectado ao Railway
-- Host: turntable.proxy.rlwy.net  Port: 40750  User: root  Database: railway

CREATE TABLE IF NOT EXISTS uploaded_photos (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  filename     VARCHAR(500)  NOT NULL,
  url          TEXT          NOT NULL,
  caption      VARCHAR(500)  DEFAULT '',
  uploaded_by  VARCHAR(100)  DEFAULT 'Matheus',
  created_at   TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);

