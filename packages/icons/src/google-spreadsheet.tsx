import { mdiGoogleSpreadsheet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleSpreadsheet(props: IconComponentProps) {
  return <Icon path={mdiGoogleSpreadsheet} {...props} />;
}

export { mdiGoogleSpreadsheet as path };
