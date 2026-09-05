DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_getalldocuments;
CREATE PROCEDURE sp_getalldocuments() 
BEGIN
     
    SELECT 
        D.*, 
        I.full_name AS investor_name,
        I.investor_id AS investor_id
    FROM 
        documents AS D
    LEFT JOIN investors AS I ON D.investor_recid = I.id ORDER BY D.id DESC;

END$$

DELIMITER ;