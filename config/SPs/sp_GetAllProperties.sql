


DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_GetAllProperties;
CREATE PROCEDURE sp_GetAllProperties()
BEGIN
    
    SELECT 
        id,
        property_name,
        property_type
    FROM
        properties WHERE status = "Active";

END$$

DELIMITER ;