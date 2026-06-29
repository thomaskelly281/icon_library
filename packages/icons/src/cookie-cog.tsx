import { mdiCookieCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CookieCog(props: IconComponentProps) {
  return <Icon path={mdiCookieCog} {...props} />;
}

export { mdiCookieCog as path };
