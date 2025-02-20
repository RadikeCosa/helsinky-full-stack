# helsinky-full-stack

sequenceDiagram
    participant Browser
    participant Server

    Note right of Browser: Usuario escribe contenido en el campo de texto en la SPA

    Note right of Browser: Usuario hace clic en el botón "Guardar"

    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note (Datos enviados como JSON o similar)
    activate Server
    Server-->>Browser: 201 Created (o similar) (con datos de la nueva nota)
    deactivate Server

    Note right of Browser: Código JavaScript de SPA recibe la respuesta.

    Note right of Browser: Código JavaScript de SPA actualiza directamente la lista de notas mostradas con la nueva nota (sin necesidad de recargar la página completa ni volver a solicitar todas las notas).
