import { mdiVolleyball } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Volleyball(props: IconComponentProps) {
  return <Icon path={mdiVolleyball} {...props} />;
}

export { mdiVolleyball as path };
