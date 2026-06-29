import { mdiVanityLight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VanityLight(props: IconComponentProps) {
  return <Icon path={mdiVanityLight} {...props} />;
}

export { mdiVanityLight as path };
