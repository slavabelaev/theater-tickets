FROM slavabelaev/firebase-tools

ARG FIREBASE_TOKEN
ENV FIREBASE_TOKEN=$FIREBASE_TOKEN

COPY . /app/

WORKDIR /app

RUN ls

RUN npm install

RUN npm run build

RUN firebase deploy --only=hosting
