DELIMITER $$

-- DROP PROCEDURE IF EXISTS sp_BulkMarkReturnsPaid $$

CREATE PROCEDURE sp_BulkMarkReturnsPaid()
BEGIN
SET SQL_SAFE_UPDATES= 0;
    UPDATE returns
    SET
        status = 'Paid'
    WHERE status IN ('Pending', 'Delayed');

    SELECT
        ROW_COUNT() AS updated_count,
        'Returns marked as Paid successfully.' AS message;
        SET SQL_SAFE_UPDATES= 1;

END $$

DELIMITER ;