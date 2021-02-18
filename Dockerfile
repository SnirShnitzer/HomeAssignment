FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY billing-system/ ./billing-system/
RUN cd billing-system && npm install

EXPOSE 3000

CMD ["npm", "start"]


FROM node:10 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/billing-system/build ./billing-system/build
COPY api/package*.json ./api/
RUN cd api && npm install
COPY api/server.js ./api/

EXPOSE 3080

CMD ["node", "./api/server.js"]