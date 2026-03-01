import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Configuration manquante: RESEND_API_KEY" },
        { status: 500 },
      );
    }

    const { name, email, message } = await request.json();

    // CHAMPS GTML RESQUIS
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 },
      );
    }

    // EMAIL VALID
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    // ENVOIE MAIL RESEND
    const contactEmail = process.env.CONTACT_EMAIL || "delivered@resend.dev";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur Resend:", error);

      const resendMessage =
        typeof error.message === "string" && error.message.length > 0
          ? error.message
          : "Erreur lors de l'envoi de l'email";

      if (error.statusCode === 403) {
        return NextResponse.json(
          {
            error:
              "Configuration Resend invalide. En mode test, utilisez 'from: onboarding@resend.dev' et envoyez uniquement vers votre propre email de compte Resend. Pour envoyer à d'autres adresses, vérifiez un domaine sur resend.com/domains et utilisez une adresse 'from' de ce domaine.",
            details: resendMessage,
          },
          { status: 403 },
        );
      }

      return NextResponse.json(
        { error: resendMessage },
        { status: typeof error.statusCode === "number" ? error.statusCode : 500 },
      );
    }

    return NextResponse.json(
      { message: "Email envoyé avec succès", data },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erreur:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
