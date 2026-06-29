import { mdiSpoonSugar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpoonSugar(props: IconComponentProps) {
  return <Icon path={mdiSpoonSugar} {...props} />;
}

export { mdiSpoonSugar as path };
