import { mdiEmailNewsletter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailNewsletter(props: IconComponentProps) {
  return <Icon path={mdiEmailNewsletter} {...props} />;
}

export { mdiEmailNewsletter as path };
