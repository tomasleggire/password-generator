import React, { useState } from 'react';

export default function usePassword() {
    const initialStatePassword = "P4$5W0rD!";
    const [newPassword, setNewPassword] = useState('')

    return {
        initialStatePassword,
        newPassword,
        setNewPassword
    }
}