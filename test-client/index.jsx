import { h, render, Component } from 'preact';
import '../src/index';
import { modal, modalAlert, modalConfirm, modalPrompt } from '../src';

class Main extends Component {
    render() {
        return (
            <>
                <h2 style="cursor: pointer" onClick={async () => {
                    const a = await modal({
                        header: ({ close }) => <h2 onClick={async () => {
                            const c = await modal({
                                header: ({ close }) => 'Welcomessssss',
                                body: ({ close }) => <p>Welcome one our website</p>,
                                footer: ({ close }) => <sw-button onClick={() => close('modal c')}>OK</sw-button>,
                            });
                            console.log(c);
                        }} className="test">Welcome CLICK!</h2>,
                        body: ({ close }) => <div className="test2">Welcome one our website
                            <div>TEST</div>
                        </div>,
                        footer: ({ close }) => <sw-button onClick={() => close('modal a')}>OK</sw-button>,
                        large: true,
                    });

                    const b = await modal({
                        header: <h2>Next</h2>,
                        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nostrum quidem quisquam suscipit ullam, voluptatem. Eligendi et explicabo inventore porro provident repellendus sit. Accusantium alias beatae blanditiis consequatur dolorem doloremque, dolores ducimus et eum fuga labore officiis pariatur quasi qui quod quos rem repudiandae velit, vitae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nostrum quidem quisquam suscipit ullam, voluptatem. Eligendi et explicabo inventore porro provident repellendus sit. Accusantium alias beatae blanditiis consequatur dolorem doloremque, dolores ducimus et eum fuga labore officiis pariatur quasi qui quod quos rem repudiandae velit, vitae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nostrum quidem quisquam suscipit ullam, voluptatem. Eligendi et explicabo inventore porro provident repellendus sit. Accusantium alias beatae blanditiis consequatur dolorem doloremque, dolores ducimus et eum fuga labore officiis pariatur quasi qui quod quos rem repudiandae velit, vitae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nostrum quidem quisquam suscipit ullam, voluptatem. Eligendi et explicabo inventore porro provident repellendus sit. Accusantium alias beatae blanditiis consequatur dolorem doloremque, dolores ducimus et eum fuga labore officiis pariatur quasi qui quod quos rem repudiandae velit, vitae?',
                        footer: ({ close }) => <sw-button onClick={() => close('modal b')}>OK</sw-button>,
                        large: false,
                    });

                    console.log(a, b);
                }}>Click HERE!!!</h2>

                <h3 style="cursor: pointer" onClick={async () => {
                    const alert = await modalAlert({
                        title: 'Danger!',
                        text: 'You are not allowed to view this content!',
                        buttonLabel: 'OK',
                        icon: 'cross'
                    });

                    console.log(alert);
                }}>Modal Alert CLICK ME!</h3>


                <h3 style="cursor: pointer" onClick={async () => {
                    const name = await modalPrompt({
                        title: 'Please answer',
                        text: 'Please enter your name',
                        placeholder: 'name',
                        initialValue: '',
                        icon: 'user'
                    });

                    console.log(name);
                }}>Modal Prompt CLICK ME!</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio, excepturi iste nostrum
                    odit quibusdam quisquam sunt tempore ullam voluptates. Aperiam commodi debitis doloremque, error et
                    hic in mollitia nemo numquam rem, tempora ut vel? Debitis dolorem excepturi illo non odit provident
                    quas rerum, tempore voluptatibus! Alias animi aut blanditiis consequuntur culpa debitis delectus
                    deleniti dignissimos dolor dolores eius eligendi enim et, exercitationem illum in ipsa iusto laborum
                    molestias, necessitatibus neque nisi nobis obcaecati pariatur porro praesentium quam quas quisquam
                    repellendus saepe sit soluta sunt unde vel vero voluptatem voluptates. Amet aperiam autem
                    consectetur cum cumque doloremque eius eos error facilis hic illum ipsum, iure laboriosam molestiae
                    natus nisi numquam odit optio perspiciatis praesentium quis quos recusandae reiciendis sunt tenetur
                    ullam, vitae! Aspernatur, deserunt distinctio doloremque et facere fuga fugiat in inventore iste
                    itaque nihil placeat possimus reiciendis totam veritatis. Ad aut consequatur delectus distinctio
                    dolor dolorem est eum eveniet fugiat harum illo, maiores minima mollitia quam, quos. Cupiditate esse
                    id pariatur ullam. Alias eum nemo nobis, quod quos similique sit. Alias animi delectus doloremque
                    ducimus, error, est, facilis fugit laborum laudantium natus nihil omnis praesentium quidem sunt
                    ullam! A, ad deserunt dolorum ea exercitationem in laudantium officia quam, quas quasi quidem, sequi
                    vero. Alias animi aperiam consectetur distinctio dolore ea eligendi fugiat itaque magnam maxime
                    neque nobis, perferendis, porro quaerat quam repellat, repellendus repudiandae saepe tempore
                    temporibus ullam veniam voluptatum? Accusamus aliquid consequuntur cupiditate dicta doloremque
                    dolores dolorum eaque esse eveniet excepturi facere facilis fuga in laborum magnam maiores minima
                    modi nostrum, obcaecati odio omnis quas repellendus reprehenderit sit soluta tenetur voluptatum?
                    Aliquid atque aut autem culpa dignissimos doloremque ea eligendi exercitationem illum iusto maiores
                    maxime minus modi molestias neque, nisi pariatur perferendis placeat, ratione repudiandae vel,
                    voluptatem voluptatum. Adipisci assumenda dignissimos eaque eius, esse excepturi illo itaque libero,
                    molestias nihil nulla perferendis perspiciatis quae, quas quo quod recusandae reiciendis repudiandae
                    sed ut! Dignissimos doloremque fugit repellat sapiente tempore. Aliquid at cumque enim error eum,
                    excepturi explicabo in libero minima nostrum, odit perferendis porro. Aliquam assumenda beatae
                    dolore doloribus eligendi, excepturi facilis, iste libero molestias neque pariatur placeat quidem?
                    Ad aperiam dignissimos eligendi, esse, excepturi explicabo itaque molestias nemo sapiente temporibus
                    ullam vero? Ad animi cupiditate dolorem ea eligendi, est minus nisi odio pariatur qui? Aliquam
                    beatae commodi consequatur culpa dicta distinctio ducimus error est, in iste libero obcaecati,
                    omnis, pariatur reiciendis totam! Aliquam architecto dicta doloribus ea eaque error eum eveniet
                    expedita, harum itaque molestiae numquam perspiciatis, provident quas quidem ullam voluptates.
                    Aspernatur molestiae natus obcaecati saepe sapiente. Ad ea fugit natus quod, quos rem ut voluptatum!
                    Consectetur dicta est ex minus nemo numquam qui quis quo sit unde. Aliquam, consectetur
                    consequuntur, cupiditate deserunt dignissimos dolore exercitationem impedit iste laboriosam laborum
                    magni maxime nam non obcaecati officia optio placeat quibusdam quidem sed tempore temporibus vitae
                    voluptates? Adipisci animi consequatur culpa cumque id, illo ipsa non praesentium qui sapiente ullam
                    veritatis vitae voluptatum? Accusantium aperiam aut autem corporis cum delectus dignissimos eaque
                    ex, excepturi id ipsam laborum maxime molestias mollitia natus necessitatibus odit perferendis
                    placeat porro provident quaerat repudiandae, totam voluptate voluptatem voluptatum? Corporis quaerat
                    quisquam sed. Alias earum nemo, nisi quod similique tempora unde veniam! Ab aliquam amet asperiores
                    cumque deleniti earum, eius eum expedita facilis impedit, inventore nihil omnis, porro qui sed
                    voluptate voluptatum. Animi commodi consectetur eos ipsam magni qui reiciendis sit vitae? Accusamus
                    aliquid iusto libero nemo saepe. At deserunt ex hic laboriosam maiores necessitatibus neque optio
                    quos recusandae unde. Fuga iusto magnam nulla, tenetur vel vero? Aliquid blanditiis consequuntur
                    eveniet, magnam nesciunt nobis voluptas. A beatae, debitis deleniti doloribus fuga fugit labore odio
                    quos ratione ut. Corporis doloribus, ducimus, explicabo facere, iste magni nobis perferendis quaerat
                    quo repellendus sapiente sequi sit soluta sunt suscipit tempora tempore. Dolor et incidunt quae
                    rerum. Ab alias, esse hic magnam veritatis vitae voluptas. A aliquam aperiam at beatae enim, est
                    eveniet ex, excepturi exercitationem, laboriosam minus porro quae rem sit suscipit tempore ullam
                    vero. Aperiam aut culpa dicta distinctio dolores doloribus earum et facere, facilis fugit impedit
                    ipsum labore optio, porro reiciendis rem repellat rerum sapiente sit unde veritatis, voluptas
                    voluptatum! Ab aliquam asperiores autem cupiditate earum eveniet explicabo ipsum itaque iusto minus
                    modi, neque nostrum, officia, vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus, impedit laudantium magnam nostrum totam veritatis! Ab accusamus aliquam aut beatae
                    distinctio dolorem doloribus ducimus ea, esse eveniet excepturi facere id incidunt iusto libero
                    molestiae nam nostrum perferendis possimus quas, quia quidem repudiandae suscipit tenetur veritatis
                    vero voluptates. Aperiam assumenda, culpa doloribus earum eius in minima repellendus sit tempora ut.
                    Eligendi, quos, temporibus! Adipisci autem, delectus et id in iusto labore magnam maxime modi
                    mollitia natus nemo non, praesentium quaerat quibusdam repellat repudiandae soluta tempora, tenetur
                    voluptatum! Architecto ipsam, praesentium! A accusamus atque deserunt error esse labore nihil
                    perspiciatis unde, veritatis! Architecto dolorum enim, eum iste maiores minus sequi vitae
                    voluptatum. Aut, iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
                    deleniti eius eligendi impedit inventore iure magnam molestiae nihil perferendis, porro tempora
                    temporibus. Doloribus et ex harum magni molestias saepe tenetur totam? Ab aperiam dolores eius
                    facere illum iure libero maiores nisi nulla pariatur, praesentium qui quisquam repudiandae rerum
                    suscipit tempore veniam. Animi asperiores cumque cupiditate dignissimos esse ex impedit laboriosam
                    libero nam, natus nisi non nostrum odit officia quae quis quo quod sed voluptate voluptatibus! Cum,
                    cupiditate ex illum ipsam officiis possimus qui quia vel. Aliquid aspernatur assumenda autem
                    consequatur consequuntur deleniti deserunt dolore dolores earum eligendi esse, et harum illo impedit
                    ipsam laborum minus molestiae nam nemo omnis optio quia repellendus reprehenderit sapiente tempora
                    tempore temporibus totam? Alias ea error ex harum laudantium mollitia nobis porro, quis quos! Alias
                    aperiam aut consequatur corporis, dolor doloribus enim harum id illo impedit iste libero, maxime
                    minus mollitia nemo nisi non omnis quae qui quis quisquam quod quos reiciendis sit tenetur ut veniam
                    veritatis vero vitae voluptatum! Commodi dolore dolorum, facilis harum ipsam libero magnam porro
                    sapiente tempora temporibus! Adipisci excepturi expedita ipsa itaque laboriosam libero officia
                    porro, ullam. Assumenda culpa eveniet, ex illum, ipsam molestiae molestias nemo numquam optio
                    perspiciatis quos rerum, sint tempora totam vel. Accusamus aliquam asperiores consequatur cupiditate
                    delectus dolorem earum eum, hic magnam minima modi molestiae nemo omnis sed sequi sunt temporibus
                    unde voluptas voluptate voluptatem. Aspernatur debitis, dolore fugit impedit laborum magni officia
                    voluptatum. Accusamus asperiores aut, corporis cumque dignissimos dolorem dolores iure laudantium
                    magni neque, perspiciatis, provident sapiente temporibus tenetur velit? Alias aliquam architecto
                    assumenda aut, dignissimos eligendi facere ipsum itaque iusto labore laborum magnam minus modi
                    molestias nisi placeat possimus quae quasi quos ratione, repellat, sit sunt tempore veniam
                    voluptatem voluptates voluptatibus. Adipisci dicta eius fuga nisi officia omnis recusandae! Alias
                    dolores ducimus ea est exercitationem expedita facere ipsum nobis nostrum numquam officiis omnis
                    placeat possimus quae quibusdam quod reprehenderit, repudiandae, soluta temporibus, vitae? Ad animi
                    assumenda consequatur dolorem enim eveniet expedita explicabo fugit labore magni, maiores nobis
                    quaerat, ratione repudiandae sint veniam voluptate! Cum exercitationem harum nostrum, officia optio
                    quasi reprehenderit tenetur voluptatem. Aperiam asperiores consequuntur corporis deserunt
                    dignissimos distinctio dolorum, ea eligendi esse est, eum expedita fugiat illo in iusto molestias
                    nesciunt nisi nulla quae quam, quas quidem quo recusandae saepe ullam ut voluptate voluptates.
                    Asperiores consectetur consequatur culpa cupiditate deserunt dolor dolorem doloremque eaque esse
                    eveniet expedita explicabo fuga fugiat illo illum iusto laboriosam libero modi nam necessitatibus
                    neque nesciunt non numquam odit perferendis porro provident quibusdam quidem recusandae saepe
                    similique sit totam, vero voluptas voluptate voluptatem voluptates. Deleniti dolore dolorem
                    excepturi maxime nesciunt nulla voluptatem! Adipisci alias aliquam aperiam beatae consequatur
                    delectus distinctio ducimus ea earum eligendi inventore iste laborum magnam molestiae, molestias
                    nesciunt nisi officia omnis reprehenderit temporibus totam, veritatis voluptatum? Aspernatur at
                    commodi cum dicta doloribus eveniet exercitationem facere fugit, impedit, incidunt inventore ipsum
                    iste itaque iure labore magnam maiores molestiae nam nemo odit omnis quas qui quis quisquam quo
                    repellat sequi similique tenetur totam vel? Ad alias animi aperiam consequatur corporis dolore
                    ducimus earum error, est et ex facere fugit, inventore ipsa iusto laborum libero mollitia nihil odit
                    omnis porro provident quae quaerat quidem quod rem saepe temporibus tenetur totam veniam? Adipisci
                    amet aut deserunt dicta dignissimos eos esse fugit iusto magnam maiores minima, nam non perferendis
                    perspiciatis quaerat quibusdam quidem quo sit sunt tempore. Asperiores aspernatur consequuntur
                    doloremque enim eveniet fugiat inventore iure maxime molestiae, recusandae repellat sint soluta
                    ullam. Aliquam debitis deserunt dignissimos dolorem illum officia perspiciatis quae rem
                    reprehenderit tenetur. Aliquam dolor fugit in ipsam neque omnis sapiente! Asperiores assumenda ea
                    itaque nesciunt perspiciatis quod repellendus. Dolorum impedit neque provident veritatis voluptates.
                    Assumenda beatae fugit non officiis omnis optio quos saepe! Culpa dignissimos magnam modi molestiae
                    natus repellat temporibus? Alias at deleniti illum inventore labore, quam quo quod temporibus vel
                    voluptatibus! Amet animi consectetur delectus deleniti doloremque ducimus ea earum, excepturi,
                    laboriosam magni molestiae, nam natus neque nesciunt obcaecati quae quaerat quas quidem quod
                    recusandae rem repudiandae sed sint vel veritatis voluptatem voluptates voluptatum. Ad architecto
                    enim laborum maiores, non nulla quaerat reiciendis repudiandae vel veritatis. Aperiam deserunt eos
                    magnam mollitia nam nihil, possimus quo? Ad architecto aut autem delectus, distinctio dolores
                    doloribus dolorum enim ex expedita molestias, nobis obcaecati officiis omnis placeat praesentium
                    quam quidem reprehenderit saepe, voluptatum. Obcaecati odit omnis quis! Ab, ad assumenda labore
                    nulla omnis quaerat quas quibusdam quidem rem repudiandae sunt velit voluptas voluptate. Ex
                    laudantium nihil placeat quia soluta. Animi aspernatur atque autem distinctio doloribus esse et eum
                    explicabo, impedit incidunt inventore modi molestias nemo nisi possimus quam quo quod ratione sequi,
                    veritatis. Accusantium adipisci aliquid aperiam assumenda atque cum dicta dolore enim error et
                    eveniet ex illum impedit iste, itaque laudantium molestiae natus nesciunt nisi nobis odit pariatur
                    perspiciatis praesentium repellat similique tempora tempore vitae. Accusantium aspernatur deserunt
                    dignissimos facilis, maxime minima porro quaerat sit, temporibus ut velit voluptate voluptatem!
                    Dolores eligendi incidunt magnam mollitia nisi, sapiente sint voluptatum. Ab accusamus alias at
                    deserunt ducimus eius excepturi expedita explicabo facere facilis id incidunt iste laboriosam
                    nesciunt, quo quod reiciendis similique tenetur unde veniam. Dolore et inventore laudantium
                    molestias nam non praesentium quibusdam similique sit tempora. Autem beatae cumque deserunt
                    distinctio dolore ea eaque, ex exercitationem, fugiat laudantium molestias numquam optio possimus
                    similique sit velit voluptatibus? Ab accusantium cum deleniti dignissimos enim inventore non quis,
                    quo! Adipisci blanditiis eum fugiat, iste iure labore libero nihil officia quibusdam quisquam saepe
                    sed sequi? Ad fugiat hic inventore ipsa quibusdam rerum tempore! Accusantium ad amet aperiam commodi
                    deleniti ducimus eaque enim explicabo facere fugit hic iusto minus neque, nesciunt obcaecati odio
                    perferendis perspiciatis possimus praesentium, quas qui quis quo recusandae rerum similique sit
                    tenetur ullam unde velit vero, vitae voluptate voluptates voluptatum? Aliquam ea fugit harum illum
                    laudantium natus perspiciatis, quas quidem quisquam recusandae repudiandae sint totam! Ducimus ex
                    harum impedit voluptates? Assumenda at consequatur debitis dignissimos, earum explicabo harum
                    necessitatibus nemo nobis porro praesentium quod sed sit tempora totam vero voluptas. Aut dolores
                    expedita fugit inventore, iure molestiae optio reprehenderit vel? Alias aperiam assumenda cumque
                    delectus esse ipsum, iste iure nobis officia, placeat quaerat quas, sed veritatis. Exercitationem
                    impedit, quae! Alias aspernatur distinctio error et ipsum minima possimus quis sed vitae.
                    Accusantium aperiam asperiores atque corporis dolorum est ex, mollitia nostrum numquam perspiciatis
                    recusandae velit veritatis voluptate! Aperiam architecto aut consequuntur cupiditate dolore
                    doloremque dolores doloribus enim error esse eum, facere hic inventore itaque laborum officiis,
                    perferendis qui quisquam ratione rerum saepe temporibus totam ut vitae voluptas? Aut expedita illo
                    laborum, magni molestias nisi omnis quibusdam quidem rem repudiandae sint sit velit voluptatibus. Ad
                    debitis deleniti deserunt dignissimos doloremque dolores eaque enim, eos facere illum molestiae nam
                    nihil obcaecati perspiciatis quisquam sapiente veritatis. Aliquid explicabo id molestiae quaerat
                    repellendus ullam?</p>

                <h3 style="cursor: pointer" onClick={async () => {
                    const userAccepted = await modalConfirm({
                        title: 'License',
                        text: 'Do you accept the license?',
                        okLabel: 'Yes',
                        cancelLabel: 'No',
                        icon: 'question-mark'
                    });

                    console.log(userAccepted);
                }}>Modal Confirm CLICK ME!</h3>
            </>
        );
    }
}

render(h(Main), document.body);
