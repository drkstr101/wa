---
title: Expo
layout: PageLayout
sections:
  - elementId: ''
    colors: neutral
    title: We’re growing fast
    subtitle: You should join us.
    media:
      type: ImageBlock
      url: /images/AdobeStock_434934439.jpeg
      altText: Hero section image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-12
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: center
      subtitle:
        textAlign: center
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
  - elementId: ''
    colors: neutral
    quote: >-
      ## Being part of this team has been incredible. We’ve fill each other’s
      gaps, and we go to lunch together
    name: Carla Rogers
    title: Someone from the team
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-36
        justifyContent: center
      quote:
        textAlign: center
      name:
        textAlign: center
      title:
        textAlign: center
    type: QuoteSection
  - elementId: ''
    colors: neutral
    images:
      - type: ImageBlock
        url: /images/expo.jpg
        altText: People in the meeting room
      - type: ImageBlock
        url: /images/post-2.jpg
        altText: People in the meeting room
    spacing: 3
    columns: 2
    aspectRatio: '1:1'
    imageSizePx: 400
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
    type: MediaGallerySection
  - colors: neutral
    elementId: ''
    title: Open roles
    projectLists:
      - type: ProjectList
        title: Product
        items:
          - type: ProjectListItem
            title: Director of product managment
            location: San Francisco
            text: >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            actions:
              - label: Apply
                altText: Apply
                url: /
                showIcon: true
                icon: arrowRight
                iconPosition: right
                elementId: ''
                type: Link
      - type: ProjectList
        title: Engineering
        items:
          - type: ProjectListItem
            title: Head of engineering
            location: San Francisco
            text: >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            actions:
              - label: Apply
                altText: Apply
                url: /
                showIcon: true
                icon: arrowRight
                iconPosition: right
                elementId: ''
                type: Link
          - type: ProjectListItem
            title: Senior Backend Engineer
            location: Remote
            text: >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            actions:
              - label: Apply
                altText: Apply
                url: /
                showIcon: true
                icon: arrowRight
                iconPosition: right
                elementId: ''
                type: Link
      - type: ProjectList
        title: Sales
        items:
          - type: ProjectListItem
            title: Sales Development Representative
            location: San Francisco
            text: >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            actions:
              - label: Apply
                altText: Apply
                url: /
                showIcon: true
                icon: arrowRight
                iconPosition: right
                elementId: ''
                type: Link
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-32
          - pb-60
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        textAlign: center
    type: ProjectsSection
  - elementId: contact-form
    colors: primary
    backgroundSize: inset
    title: Not seeing the right role? Contact us
    text: >-
      We might have more roles soon, and we’ll contact you if we think there
      might be a good match
    form:
      type: FormBlock
      variant: variant-a
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: first-name
          label: Your first name
          hideLabel: true
          placeholder: First name
          isRequired: false
          width: 1/2
        - type: TextFormControl
          name: last-name
          label: Your last name
          hideLabel: true
          placeholder: Last name
          isRequired: false
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Your email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
        - type: TextFormControl
          name: address
          label: Your address
          hideLabel: true
          placeholder: Address
          isRequired: false
          width: full
      submitLabel: Submit
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-24
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderRadius: xx-large
        boxShadow: xx-large
      title:
        textAlign: center
      text:
        textAlign: center
    type: ContactSection
---
