import { mdiHome } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Home(props: IconComponentProps) {
  return <Icon path={mdiHome} {...props} />;
}

export { mdiHome as path };
