export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto py-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} Alfredo Jesus Albornoz. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
