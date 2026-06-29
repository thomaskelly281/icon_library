import { mdiGoogleMyBusiness } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleMyBusiness(props: IconComponentProps) {
  return <Icon path={mdiGoogleMyBusiness} {...props} />;
}

export { mdiGoogleMyBusiness as path };
