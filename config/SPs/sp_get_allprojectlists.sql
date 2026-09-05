DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_get_allprojectlists;
CREATE PROCEDURE sp_get_allprojectlists() 
BEGIN
     
    SELECT 
        *
    FROM
        properties;

END$$

DELIMITER ;