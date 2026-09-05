DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_UpdatePropertiesdata;
CREATE PROCEDURE sp_UpdatePropertiesdata (
    IN p_id              INT,
    IN p_property_name   VARCHAR(255),
    IN p_location        VARCHAR(255),
    IN p_property_type   VARCHAR(100),
    IN p_interest_rate   DECIMAL(10,2),
    IN p_description     TEXT,
    IN p_status          VARCHAR(50),
    IN p_launch_date     DATETIME,
    IN p_phase           VARCHAR(50)
)
BEGIN
    SET SQL_SAFE_UPDATES = 0;
    UPDATE properties
    SET
        property_name = p_property_name,
        location = p_location,
        property_type = p_property_type,
        interest_rate = p_interest_rate,
        description = p_description,
        status = p_status,
        launch_date = p_launch_date,
        phase = p_phase
    WHERE id = p_id;
    SET SQL_SAFE_UPDATES = 1;

    SELECT ROW_COUNT() AS rows_affected;
END$$

DELIMITER ;