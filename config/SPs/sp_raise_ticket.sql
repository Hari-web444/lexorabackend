DELIMITER $$
-- DROP PROCEDURE IF EXISTS sp_raise_ticket;
CREATE PROCEDURE sp_raise_ticket(
    IN p_investor_id INT,
    IN p_category_id INT,
    IN p_subject VARCHAR(255),
    IN p_message TEXT
)
BEGIN

    INSERT INTO tickets
        (
            investor_id,
            category_id,
            subject,
            message,
            status,
            created_at
        )
        VALUES
        (
            p_investor_id,
            p_category_id,
            p_subject,
            p_message,
            'Open',
            NOW()
        );

        SELECT
            id,
            investor_id,
            category_id,
            subject,
            message,
            status,
            created_at
        FROM tickets
        WHERE id = LAST_INSERT_ID();

END$$

DELIMITER ;