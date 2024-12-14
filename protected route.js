app.get('/user', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);
        res.json({ username: user.username });
    } catch (err) {
        res.status(500).send('Error fetching user data: ' + err.message);
    }
});
