import { mdiVuetify } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Vuetify(props: IconComponentProps) {
  return <Icon path={mdiVuetify} {...props} />;
}

export { mdiVuetify as path };
