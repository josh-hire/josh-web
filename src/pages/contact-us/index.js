import PropTypes from 'prop-types';
import DefaultLayout from 'Modules/Layout/DefaultLayout';
import ContactUsModule from 'Modules/Landing/ContactUs';

export async function getServerSideProps() {
  return {
    props: {
      data: {
        title: 'Contact Us - PT_tester',
        meta: {
          description:
            'Channel komunikasi PT_tester! Berisikan form untuk mempermudah pemain Digital menghubungi PT_tester dengan lebih cepat.',
        },
      },
    },
  };
}

const ContactUs = ({ props }) => {
  return (
    <DefaultLayout dataProps={props}>
      <ContactUsModule />
    </DefaultLayout>
  );
};

ContactUs.propTypes = {
  props: PropTypes.object,
};

ContactUs.defaultProps = {
  props: {},
};

export default ContactUs;
