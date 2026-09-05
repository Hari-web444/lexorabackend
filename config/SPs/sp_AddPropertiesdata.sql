


DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_AddPropertiesdata;
CREATE PROCEDURE sp_AddPropertiesdata(
     IN p_property_name   VARCHAR(255),
    IN p_location        VARCHAR(255),
    IN p_property_type   VARCHAR(100),
    IN p_interest_rate   DECIMAL(10,2),
    IN p_description     TEXT,
    IN p_status          VARCHAR(50),
    IN p_launch_date     DATETIME,
    IN p_phase           VARCHAR(50),
    IN p_created_by      INT
) 
BEGIN
     
    INSERT INTO properties
        (property_name, location, property_type, interest_rate, description,
         status, created_at, launch_date, phase, created_by)
    VALUES
        (p_property_name, p_location, p_property_type, p_interest_rate, p_description,
         p_status, NOW(), p_launch_date, p_phase, p_created_by);

    SELECT LAST_INSERT_ID() AS id;

END$$

DELIMITER ;