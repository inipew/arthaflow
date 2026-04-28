-- categories table
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('income', 'expense'))
);

-- transactions table
CREATE TABLE IF NOT EXISTS transactions (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL CHECK (type IN ('income', 'expense')),
    amount REAL NOT NULL,
    category_id INTEGER NOT NULL,
    description TEXT,
    person_name TEXT,
    date TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories (id)
);

-- Initial categories
INSERT INTO categories (name, type) VALUES ('Bon / Utang ke Bos', 'income');
INSERT INTO categories (name, type) VALUES ('Hasil Jual Beras PK', 'income');
INSERT INTO categories (name, type) VALUES ('Uang Kembalian Beli Gabah', 'income');

INSERT INTO categories (name, type) VALUES ('Beli Gabah', 'expense');
INSERT INTO categories (name, type) VALUES ('DP / Panjer', 'expense');
INSERT INTO categories (name, type) VALUES ('Listrik', 'expense');
INSERT INTO categories (name, type) VALUES ('Upah Kuli Proses Gabah', 'expense');
INSERT INTO categories (name, type) VALUES ('Upah Kuli Panen Manual', 'expense');
INSERT INTO categories (name, type) VALUES ('Upah Mesin Kombi', 'expense');
INSERT INTO categories (name, type) VALUES ('Karung', 'expense');
INSERT INTO categories (name, type) VALUES ('Sopir', 'expense');
INSERT INTO categories (name, type) VALUES ('Sekam', 'expense');
INSERT INTO categories (name, type) VALUES ('Uang Makan', 'expense');
INSERT INTO categories (name, type) VALUES ('Solar', 'expense');
INSERT INTO categories (name, type) VALUES ('memberi utang ke orang', 'expense');
INSERT INTO categories (name, type) VALUES ('beli alat', 'expense');
INSERT INTO categories (name, type) VALUES ('beli obat sawah', 'expense');
INSERT INTO categories (name, type) VALUES ('beli pupuk', 'expense');
INSERT INTO categories (name, type) VALUES ('upah kuli sawah', 'expense');
INSERT INTO categories (name, type) VALUES ('upah traktor', 'expense');
