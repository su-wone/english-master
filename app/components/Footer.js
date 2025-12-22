export default function Footer() {
    return (
        <footer style={{
            padding: '2rem 0',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            borderTop: '1px solid var(--card-border)',
            marginTop: 'auto'
        }}>
            <p>© {new Date().getFullYear()} English Master. All rights reserved.</p>
            <p style={{ marginTop: '0.5rem' }}>
                Built with ❤️ by <a href="https://github.com/su-wone" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Kang Su Won</a>
            </p>
        </footer>
    );
}
