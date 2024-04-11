import {
    Modal,
    Text,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    ModalCloseButton,
    UnorderedList,
} from '@chakra-ui/react';
import ResponsiveButton from './Button';

interface BookingModalProps {
    open: boolean;
    close: () => void;
    mobile: boolean;
    plan?: string;
}

export const PrivacyModal = ({
    open,
    close,
    mobile,
    plan,
}: BookingModalProps) => {
    return (
        <Modal
            size={mobile ? 'lg' : 'xl'}
            isOpen={open}
            onClose={close}
            closeOnEsc={true}
            isCentered={true}
            preserveScrollBarGap={true}
            scrollBehavior={'inside'}
        >
            <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(1px)" />
            <ModalContent m={'4'}>
                <ModalHeader>
                    Privacy Policy for Norfolk Pressure Washing
                </ModalHeader>
                <ModalCloseButton size={mobile ? 'lg' : 'md'} />
                <ModalBody bg={'gray.100'} mx={'4'} color={'gray.900'}>
                    <Text
                        fontWeight="600"
                        fontSize="2xl"
                        mb={'6'}
                        mt={'6'}
                        id="privacy-policy"
                    >
                        Privacy Policy
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Last updated: April 19, 2023
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        This Privacy Policy describes Our policies and
                        procedures on the collection, use and disclosure of Your
                        information when You use the Service and tells You about
                        Your privacy rights and how the law protects You.
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        We use Your Personal data to provide and improve the
                        Service. By using the Service, You agree to the
                        collection and use of information in accordance with
                        this Privacy Policy. This Privacy Policy has been
                        created with the help of the Privacy Policy Generator.
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="2xl"
                        mb={'6'}
                        mt={'6'}
                        id="interpretation-and-definitions"
                    >
                        Interpretation and Definitions
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="xl"
                        mb={'4'}
                        mt={'4'}
                        id="interpretation"
                    >
                        Interpretation
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        The words of which the initial letter is capitalized
                        have meanings defined under the following conditions.
                        The following definitions shall have the same meaning
                        regardless of whether they appear in singular or in
                        plural.
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="xl"
                        mb={'4'}
                        mt={'4'}
                        id="definitions"
                    >
                        Definitions
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        For the purposes of this Privacy Policy:
                    </Text>
                    <UnorderedList ml={'4'}>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>Account</strong> means a unique account
                                created for You to access our Service or parts
                                of our Service.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>Affiliate</strong> means an entity that
                                controls, is controlled by or is under common
                                control with a party, where &quot;control&quot;
                                means ownership of 50% or more of the shares,
                                equity interest or other securities entitled to
                                vote for election of directors or other managing
                                authority.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>Company</strong> (referred to as either
                                &quot;the Company&quot;, &quot;We&quot;,
                                &quot;Us&quot; or &quot;Our&quot; in this
                                Agreement) refers to Norfolk Pressure Washing,
                                Simcoe.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>Cookies</strong> are small files that
                                are placed on Your computer, mobile device or
                                any other device by a website, containing the
                                details of Your browsing history on that website
                                among its many uses.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>Country</strong> refers to: Ontario,
                                Canada
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>Device</strong> means any device that
                                can access the Service such as a computer, a
                                cellphone or a digital tablet.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>Personal Data</strong> is any
                                information that relates to an identified or
                                identifiable individual.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>Service</strong> refers to the Website.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>Service Provider</strong> means any
                                natural or legal person who processes the data
                                on behalf of the Company. It refers to
                                third-party companies or individuals employed by
                                the Company to facilitate the Service, to
                                provide the Service on behalf of the Company, to
                                perform services related to the Service or to
                                assist the Company in analyzing how the Service
                                is used.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>Usage Data</strong> refers to data
                                collected automatically, either generated by the
                                use of the Service or from the Service
                                infrastructure itself (for example, the duration
                                of a page visit).
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>Website</strong> refers to Norfolk
                                Pressure Washing, accessible from
                                www.norfolkpressurewashing.ca
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>You</strong> means the individual
                                accessing or using the Service, or the company,
                                or other legal entity on behalf of which such
                                individual is accessing or using the Service, as
                                applicable.
                            </Text>
                        </li>
                    </UnorderedList>
                    <Text
                        fontWeight="600"
                        fontSize="2xl"
                        mb={'6'}
                        mt={'6'}
                        id="collecting-and-using-your-personal-data"
                    >
                        Collecting and Using Your Personal Data
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="xl"
                        mb={'4'}
                        mt={'4'}
                        id="types-of-data-collected"
                    >
                        Types of Data Collected
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="lg"
                        mb={'2'}
                        mt={'2'}
                        id="personal-data"
                    >
                        Personal Data
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        While using Our Service, We may ask You to provide Us
                        with certain personally identifiable information that
                        can be used to contact or identify You. Personally
                        identifiable information may include, but is not limited
                        to:
                    </Text>
                    <UnorderedList ml={'4'}>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                Email address
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                First name and last name
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                Phone number
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                Address, State, Province, ZIP/Postal code, City
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                Usage Data
                            </Text>
                        </li>
                    </UnorderedList>
                    <Text
                        fontWeight="600"
                        fontSize="lg"
                        mb={'2'}
                        mt={'2'}
                        id="usage-data"
                    >
                        Usage Data
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Usage Data is collected automatically when using the
                        Service.
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Usage Data may include information such as Your
                        Device&#39;s Internet Protocol address (e.g. IP
                        address), browser type, browser version, the pages of
                        our Service that You visit, the time and date of Your
                        visit, the time spent on those pages, unique device
                        identifiers and other diagnostic data.
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        When You access the Service by or through a mobile
                        device, We may collect certain information
                        automatically, including, but not limited to, the type
                        of mobile device You use, Your mobile device unique ID,
                        the IP address of Your mobile device, Your mobile
                        operating system, the type of mobile Internet browser
                        You use, unique device identifiers and other diagnostic
                        data.
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        We may also collect information that Your browser sends
                        whenever You visit our Service or when You access the
                        Service by or through a mobile device.
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="lg"
                        mb={'2'}
                        mt={'2'}
                        id="tracking-technologies-and-cookies"
                    >
                        Tracking Technologies and Cookies
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        We use Cookies and similar tracking technologies to
                        track the activity on Our Service and store certain
                        information. Tracking technologies used are beacons,
                        tags, and scripts to collect and track information and
                        to improve and analyze Our Service. The technologies We
                        use may include:
                    </Text>
                    <UnorderedList ml={'4'}>
                        <li>
                            <Text fontSize="sm">
                                <strong>Cookies or Browser Cookies.</strong> A
                                cookie is a small file placed on Your Device.
                                You can instruct Your browser to refuse all
                                Cookies or to indicate when a Cookie is being
                                sent. However, if You do not accept Cookies, You
                                may not be able to use some parts of our
                                Service. Unless you have adjusted Your browser
                                setting so that it will refuse Cookies, our
                                Service may use Cookies.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize="sm">
                                <strong>Web Beacons.</strong> Certain sections
                                of our Service and our emails may contain small
                                electronic files known as web beacons (also
                                referred to as clear gifs, pixel tags, and
                                single-pixel gifs) that permit the Company, for
                                example, to count users who have visited those
                                pages or opened an email and for other related
                                website statistics (for example, recording the
                                popularity of a certain section and verifying
                                system and server integrity). Cookies can be
                                &quot;Persistent&quot; or &quot;Session&quot;
                                Cookies. Persistent Cookies remain on Your
                                personal computer or mobile device when You go
                                offline, while Session Cookies are deleted as
                                soon as You close Your web browser. Learn more
                                about cookies on the Privacy Policies website
                                article.
                            </Text>
                        </li>
                    </UnorderedList>
                    <Text fontSize={'sm'} py={'2'}>
                        We use both Session and Persistent Cookies for the
                        purposes set out below:
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        <strong>Necessary / Essential Cookies</strong>
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Type: Session Cookies
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Administered by: Us
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Purpose: These Cookies are essential to provide You with
                        services available through the Website and to enable You
                        to use some of its features. They help to authenticate
                        users and prevent fraudulent use of user accounts.
                        Without these Cookies, the services that You have asked
                        for cannot be provided, and We only use these Cookies to
                        provide You with those services.
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        <strong>
                            Cookies Policy / Notice Acceptance Cookies
                        </strong>
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Type: Persistent Cookies
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Administered by: Us
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Purpose: These Cookies identify if users have accepted
                        the use of cookies on the Website.
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        <strong>Functionality Cookies</strong>
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Type: Persistent Cookies
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Administered by: Us
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Purpose: These Cookies allow us to remember choices You
                        make when You use the Website, such as remembering your
                        login details or language preference. The purpose of
                        these Cookies is to provide You with a more personal
                        experience and to avoid You having to re-enter your
                        preferences every time You use the Website.
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        For more information about the cookies we use and your
                        choices regarding cookies, please visit our Cookies
                        Policy or the Cookies section of our Privacy Policy.
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="2xl"
                        mb={'6'}
                        mt={'6'}
                        id="use-of-your-personal-data"
                    >
                        Use of Your Personal Data
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        The Company may use Personal Data for the following
                        purposes:
                    </Text>
                    <UnorderedList ml={'4'}>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>
                                    To provide and maintain our Service
                                </strong>
                                , including to monitor the usage of our Service.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>To manage Your Account:</strong> to
                                manage Your registration as a user of the
                                Service. The Personal Data You provide can give
                                You access to different functionalities of the
                                Service that are available to You as a
                                registered user.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>
                                    For the performance of a contract:
                                </strong>{' '}
                                the development, compliance and undertaking of
                                the purchase contract for the products, items or
                                services You have purchased or of any other
                                contract with Us through the Service.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>To contact You</strong>: To contact You
                                by email, telephone calls, SMS, or other
                                equivalent forms of electronic communication,
                                such as a mobile application&#39;s push
                                notifications regarding updates or informative
                                communications related to the functionalities,
                                products or contracted services, including the
                                security updates, when necessary or reasonable
                                for their implementation.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>To provide You</strong> with news,
                                special offers and general information about
                                other goods, services and events which we offer
                                that are similar to those that you have already
                                purchased or enquired about unless You have
                                opted not to receive such information.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>To manage Your requests</strong>: To
                                attend and manage Your requests to Us.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>For business transfers</strong>: We may
                                use Your information to evaluate or conduct a
                                merger, divestiture, restructuring,
                                reorganization, dissolution, or other sale or
                                transfer of some or all of Our assets, whether
                                as a going concern or as part of bankruptcy,
                                liquidation, or similar proceeding, in which
                                Personal Data held by Us about our Service users
                                is among the assets transferred.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>For other purposes</strong>: We may use
                                Your information for other purposes, such as
                                data analysis, identifying usage trends,
                                determining the effectiveness of our promotional
                                campaigns and to evaluate and improve our
                                Service, products, services, marketing and your
                                experience.
                            </Text>
                        </li>
                    </UnorderedList>
                    <Text fontSize={'sm'} py={'2'}>
                        We may share Your personal information in the following
                        situations:
                    </Text>
                    <UnorderedList ml={'4'}>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>With Service Providers:</strong> We may
                                share Your personal information with Service
                                Providers to monitor and analyze the use of our
                                Service, to contact You.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>For business transfers:</strong> We may
                                share or transfer Your personal information in
                                connection with, or during negotiations of, any
                                merger, sale of Company assets, financing, or
                                acquisition of all or a portion of Our business
                                to another company.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>With Affiliates:</strong> We may share
                                Your information with Our affiliates, in which
                                case we will require those affiliates to honor
                                this Privacy Policy. Affiliates include Our
                                parent company and any other subsidiaries, joint
                                venture partners or other companies that We
                                control or that are under common control with
                                Us.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>With business partners:</strong> We may
                                share Your information with Our business
                                partners to offer You certain products, services
                                or promotions.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>With other users:</strong> when You
                                share personal information or otherwise interact
                                in the public areas with other users, such
                                information may be viewed by all users and may
                                be publicly distributed outside.
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                <strong>With Your consent:</strong> We may
                                disclose Your personal information for any other
                                purpose with Your consent.
                            </Text>
                        </li>
                    </UnorderedList>
                    <Text
                        fontWeight="600"
                        fontSize="xl"
                        mb={'4'}
                        mt={'4'}
                        id="retention-of-your-personal-data"
                    >
                        Retention of Your Personal Data
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        The Company will retain Your Personal Data only for as
                        long as is necessary for the purposes set out in this
                        Privacy Policy. We will retain and use Your Personal
                        Data to the extent necessary to comply with our legal
                        obligations (for example, if we are required to retain
                        your data to comply with applicable laws), resolve
                        disputes, and enforce our legal agreements and policies.
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        The Company will also retain Usage Data for internal
                        analysis purposes. Usage Data is generally retained for
                        a shorter period of time, except when this data is used
                        to strengthen the security or to improve the
                        functionality of Our Service, or We are legally
                        obligated to retain this data for longer time periods.
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="xl"
                        mb={'4'}
                        mt={'4'}
                        id="transfer-of-your-personal-data"
                    >
                        Transfer of Your Personal Data
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Your information, including Personal Data, is processed
                        at the Company&#39;s operating offices and in any other
                        places where the parties involved in the processing are
                        located. It means that this information may be
                        transferred to — and maintained on — computers located
                        outside of Your state, province, country or other
                        governmental jurisdiction where the data protection laws
                        may differ than those from Your jurisdiction.
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Your consent to this Privacy Policy followed by Your
                        submission of such information represents Your agreement
                        to that transfer.
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        The Company will take all steps reasonably necessary to
                        ensure that Your data is treated securely and in
                        accordance with this Privacy Policy and no transfer of
                        Your Personal Data will take place to an organization or
                        a country unless there are adequate controls in place
                        including the security of Your data and other personal
                        information.
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="xl"
                        mb={'4'}
                        mt={'4'}
                        id="delete-your-personal-data"
                    >
                        Delete Your Personal Data
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        You have the right to delete or request that We assist
                        in deleting the Personal Data that We have collected
                        about You.
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Our Service may give You the ability to delete certain
                        information about You from within the Service.
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        You may update, amend, or delete Your information at any
                        time by signing in to Your Account, if you have one, and
                        visiting the account settings section that allows you to
                        manage Your personal information. You may also contact
                        Us to request access to, correct, or delete any personal
                        information that You have provided to Us.
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Please note, however, that We may need to retain certain
                        information when we have a legal obligation or lawful
                        basis to do so.
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="xl"
                        mb={'4'}
                        mt={'4'}
                        id="disclosure-of-your-personal-data"
                    >
                        Disclosure of Your Personal Data
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="lg"
                        mb={'2'}
                        mt={'2'}
                        id="business-transactions"
                    >
                        Business Transactions
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        If the Company is involved in a merger, acquisition or
                        asset sale, Your Personal Data may be transferred. We
                        will provide notice before Your Personal Data is
                        transferred and becomes subject to a different Privacy
                        Policy.
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="lg"
                        mb={'2'}
                        mt={'2'}
                        id="law-enforcement"
                    >
                        Law enforcement
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Under certain circumstances, the Company may be required
                        to disclose Your Personal Data if required to do so by
                        law or in response to valid requests by public
                        authorities (e.g. a court or a government agency).
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="lg"
                        mb={'2'}
                        mt={'2'}
                        id="other-legal-requirements"
                    >
                        Other legal requirements
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        The Company may disclose Your Personal Data in the good
                        faith belief that such action is necessary to:
                    </Text>
                    <UnorderedList ml={'4'}>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                Comply with a legal obligation
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                Protect and defend the rights or property of the
                                Company
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                Prevent or investigate possible wrongdoing in
                                connection with the Service
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                Protect the personal safety of Users of the
                                Service or the public
                            </Text>
                        </li>
                        <li>
                            <Text fontSize={'sm'} py={'2'}>
                                Protect against legal liability
                            </Text>
                        </li>
                    </UnorderedList>
                    <Text
                        fontWeight="600"
                        fontSize="xl"
                        mb={'4'}
                        mt={'4'}
                        id="security-of-your-personal-data"
                    >
                        Security of Your Personal Data
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        T#he security of Your Personal Data is important to Us,
                        but remember that no method of transmission over the
                        Internet, or method of electronic storage is 100%
                        secure. While We strive to use commercially acceptable
                        means to protect Your Personal Data, We cannot guarantee
                        its absolute security.
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="2xl"
                        mb={'6'}
                        mt={'6'}
                        id="children-s-privacy"
                    >
                        Children&#39;s Privacy
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Our Service does not address anyone under the age of 13.
                        We do not knowingly collect personally identifiable
                        information from anyone under the age of 13. If You are
                        a parent or guardian and You are aware that Your child
                        has provided Us with Personal Data, please contact Us.
                        If We become aware that We have collected Personal Data
                        from anyone under the age of 13 without verification of
                        parental consent, We take steps to remove that
                        information from Our servers.
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        If We need to rely on consent as a legal basis for
                        processing Your information and Your country requires
                        consent from a parent, We may require Your parent&#39;s
                        consent before We collect and use that information.
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="2xl"
                        mb={'6'}
                        mt={'6'}
                        id="links-to-other-websites"
                    >
                        Links to Other Websites
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        Our Service may contain links to other websites that are
                        not operated by Us. If You click on a third party link,
                        You will be directed to that third party&#39;s site. We
                        strongly advise You to review the Privacy Policy of
                        every site You visit.
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        We have no control over and assume no responsibility for
                        the content, privacy policies or practices of any third
                        party sites or services.
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="2xl"
                        mb={'6'}
                        mt={'6'}
                        id="changes-to-this-privacy-policy"
                    >
                        Changes to this Privacy Policy
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        We may update Our Privacy Policy from time to time. We
                        will notify You of any changes by posting the new
                        Privacy Policy on this page.
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        We will let You know via email and/or a prominent notice
                        on Our Service, prior to the change becoming effective
                        and update the &quot;Last updated&quot; date at the top
                        of this Privacy Policy.
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        You are advised to review this Privacy Policy
                        periodically for any changes. Changes to this Privacy
                        Policy are effective when they are posted on this page.
                    </Text>
                    <Text
                        fontWeight="600"
                        fontSize="2xl"
                        mb={'6'}
                        mt={'6'}
                        id="contact-us"
                    >
                        Contact Us
                    </Text>
                    <Text fontSize={'sm'} py={'2'}>
                        If you have any questions about this Privacy Policy, You
                        can contact us:
                    </Text>
                    <UnorderedList ml={'4'}>
                        <li>
                            <Text fontSize="sm">
                                By email: norfolkpressurewashing@gmail.com
                            </Text>
                        </li>
                    </UnorderedList>
                </ModalBody>
                <ModalFooter
                    flexDirection={mobile ? 'column' : 'row'}
                    gap={'2'}
                    width={'100%'}
                    justifyContent={'start'}
                >
                    <ResponsiveButton
                        variant={'solid'}
                        colorScheme="blue"
                        width={'100%'}
                        m={0}
                        onClick={close}
                    >
                        Ok
                    </ResponsiveButton>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
