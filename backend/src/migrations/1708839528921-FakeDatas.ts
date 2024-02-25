import { MigrationInterface, QueryRunner } from "typeorm";

export class FakeDatas1708839528921 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Eire', 'non profit', 'tbailes0@angelfire.com', '07 Milwaukee Terrace', '904-313-9102', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '12/20/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Flashdog', 'non profit', 'hspores1@w3.org', '18582 Londonderry Plaza', '495-813-4516', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '7/11/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Linkbridge', 'corporation', 'msaintsbury2@europa.eu', '700 Brentwood Place', '719-965-4087', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2/18/2024');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Divavu', 'for profit', 'jdring3@cpanel.net', '39 Moulton Alley', '508-285-0404', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '7/26/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Dabtype', 'corporation', 'esimm4@alexa.com', '3 Nobel Park', '641-568-3823', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '9/3/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Browsecat', 'for profit', 'tculcheth5@examiner.com', '1401 Browning Hill', '161-470-3055', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, '12/18/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Thoughtbeat', 'corporation', 'swaryk6@tamu.edu', '4459 Fuller Place', '478-988-5469', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '9/16/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('InnoZ', 'non profit', 'lbraiden7@time.com', '57600 Green Pass', '745-905-6158', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '6/1/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Skimia', 'corporation', 'jfulger8@wordpress.org', '72242 Heffernan Pass', '677-665-7526', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '5/14/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Skiptube', 'non profit', 'gkidstoun9@typepad.com', '6814 Westridge Lane', '423-476-7297', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '12/27/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Izio', 'for profit', 'tprivera@gravatar.com', '3 Erie Court', '932-709-7151', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '10/18/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Skivee', 'for profit', 'edifrancecshib@spotify.com', '9141 Jana Drive', '859-297-5537', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, '8/21/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Yakijo', 'for profit', 'jmarklewc@etsy.com', '6 Lillian Avenue', '514-311-5730', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2/14/2024');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Voonix', 'non profit', 'amcterlaghd@auda.org.au', '2 Waubesa Alley', '532-710-9632', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '12/14/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Edgeify', 'corporation', 'btilliarde@vistaprint.com', '63 Mallard Park', '575-350-2347', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '12/1/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Livefish', 'non profit', 'mduttonf@adobe.com', '35 Rowland Center', '990-658-2598', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '6/3/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Latz', 'corporation', 'acrawcourg@nytimes.com', '9 Westport Crossing', '550-138-8036', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '1/12/2024');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Fadeo', 'non profit', 'mthebeh@istockphoto.com', '8832 Derek Crossing', '781-381-0812', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '12/23/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Wikizz', 'corporation', 'horteui@shop-pro.jp', '3003 Tony Trail', '285-734-4873', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, '5/24/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Eazzy', 'non profit', 'lgaydenj@youtu.be', '82 Morningstar Park', '121-701-6800', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '4/26/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Thoughtbridge', 'corporation', 'mladbrookk@ox.ac.uk', '854 Lighthouse Bay Trail', '801-176-6399', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '1/15/2024');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Bubbletube', 'non profit', 'jlowlesl@ning.com', '69 Atwood Parkway', '721-743-8893', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '10/17/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Browsedrive', 'non profit', 'atantm@nhs.uk', '398 Kingsford Plaza', '484-375-3757', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '12/8/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Devpoint', 'non profit', 'btoppasn@soup.io', '601 Erie Street', '877-212-7554', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '7/17/2023');
insert into organization (name, "typeOfOrganization", email, address, "phoneNumber", description, "creatorId", "createdAt") values ('Yoveo', 'for profit', 'gmedendorpo@elegantthemes.com', '655 Delaware Pass', '995-515-1809', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, '8/14/2023');

        `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
