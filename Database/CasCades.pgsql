ALTER TABLE parent_table
ADD CONSTRAINT fk_name FOREIGN KEY (parent_column) REFERENCES child_table (child_column)
ON DELETE CASCADE;
