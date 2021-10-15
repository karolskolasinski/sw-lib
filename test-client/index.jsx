import { h, render, Component } from 'preact';
import '../src/index';
import { modal } from '../src';

class Main extends Component {
    render() {
        return (
            <>
                <h2 style="cursor: pointer" onClick={() => {
                    modal({
                        header: ({ close, id }) => '<h2 onclick="alert("aaaaaa")" class="test">Welcome</h2>',
                        body: ({ close, id }) => <div className="test2">Welcome one our website
                            <div>TEST</div>
                        </div>,
                        footer: ({ close, id }) => <sw-button onClick={() => close(id)}>OK</sw-button>,
                        large: true,
                    });

                    modal({
                        header: <h2>Next</h2>,
                        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nostrum quidem quisquam suscipit ullam, voluptatem. Eligendi et explicabo inventore porro provident repellendus sit. Accusantium alias beatae blanditiis consequatur dolorem doloremque, dolores ducimus et eum fuga labore officiis pariatur quasi qui quod quos rem repudiandae velit, vitae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nostrum quidem quisquam suscipit ullam, voluptatem. Eligendi et explicabo inventore porro provident repellendus sit. Accusantium alias beatae blanditiis consequatur dolorem doloremque, dolores ducimus et eum fuga labore officiis pariatur quasi qui quod quos rem repudiandae velit, vitae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nostrum quidem quisquam suscipit ullam, voluptatem. Eligendi et explicabo inventore porro provident repellendus sit. Accusantium alias beatae blanditiis consequatur dolorem doloremque, dolores ducimus et eum fuga labore officiis pariatur quasi qui quod quos rem repudiandae velit, vitae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nostrum quidem quisquam suscipit ullam, voluptatem. Eligendi et explicabo inventore porro provident repellendus sit. Accusantium alias beatae blanditiis consequatur dolorem doloremque, dolores ducimus et eum fuga labore officiis pariatur quasi qui quod quos rem repudiandae velit, vitae?',
                        footer: ({ close, id }) => <sw-button onClick={() => close(id)}>OK</sw-button>,
                        large: false,
                    });

                    modal({
                        header: ({ close, id }) => 'Welcomessssss',
                        body: ({ close, id }) => <p>Welcome one our website</p>,
                        footer: ({ close, id }) => <sw-button onClick={() => close(id)}>OK</sw-button>,
                    });

                }}>Click HERE!!!</h2>
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
                    modi, neque nostrum, officia, vitae.</p>
            </>
        );
    }
}

render(h(Main), document.body);
