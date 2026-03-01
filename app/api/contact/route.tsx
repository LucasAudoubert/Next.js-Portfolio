import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { config } from "@/config";

const resend = new Resend(config.resendApiKey);

export async function POST(request: NextRequest) {
  try {
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
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Remplacer par votre domaine vérifié
      to: ["votre-email@exemple.com"], // Remplacer par votre email
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
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 },
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
